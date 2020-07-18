<?php

namespace App\Providers;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class PdfStorageService
{
  const PDF_ROOT_DIR = '/PDF';

    public function savePdfToStorage(String $pdf_file_path, String $storage_path): void
    {
        try {
            Storage::disk('ftp')->put(self::PDF_ROOT_DIR . "/$storage_path", file_get_contents($pdf_file_path));
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
        }
    }
}
