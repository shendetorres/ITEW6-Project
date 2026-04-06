<?php

namespace App\Services;

use Kreait\Firebase\Factory;
use Illuminate\Support\Facades\Log;

class FirestoreService
{
    protected $firestore;
    protected bool $available = true;
    protected ?string $credentialsPath = null;

    public function __construct()
    {
        $this->credentialsPath = config('firebase.credentials');

        if (!$this->credentialsPath || !file_exists($this->credentialsPath)) {
            Log::error("Firebase credentials file not found at '{$this->credentialsPath}'");
            $this->available = false;
            return;
        }

        try {
            $factory = (new Factory())->withServiceAccount($this->credentialsPath);
            $this->firestore = $factory->createFirestore()->database();
        } catch (\Throwable $e) {
            Log::error('Failed to initialize FirestoreService: ' . $e->getMessage());
            $this->available = false;
        }
    }

    public function isAvailable(): bool
    {
        return $this->available && $this->firestore !== null;
    }

    protected function requireFirestore(): void
    {
        if (!$this->isAvailable()) {
            throw new \RuntimeException('Firestore is not available. Check Firebase credentials or configuration.');
        }
    }

    public function getCollection(string $collection)
    {
        $this->requireFirestore();
        return $this->firestore->collection($collection)->documents();
    }

    public function getDocument(string $collection, string $documentId)
    {
        $this->requireFirestore();
        return $this->firestore->collection($collection)->document($documentId)->snapshot();
    }

    public function addDocument(string $collection, array $data)
    {
        $this->requireFirestore();
        return $this->firestore->collection($collection)->add($data);
    }

    public function updateDocument(string $collection, string $documentId, array $data)
    {
        $this->requireFirestore();
        return $this->firestore->collection($collection)->document($documentId)->set($data, ['merge' => true]);
    }

    public function deleteDocument(string $collection, string $documentId)
    {
        $this->requireFirestore();
        return $this->firestore->collection($collection)->document($documentId)->delete();
    }
}
