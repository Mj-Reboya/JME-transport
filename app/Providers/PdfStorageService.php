<?php

namespace App\Providers;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class PdfStorageService
{
    public function savePdfToStorage(String $pdf_file_path, String $storage_path): void
    {
        try {
            Storage::put("public/pdf/$storage_path", file_get_contents($pdf_file_path));
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
        }
    }
}
