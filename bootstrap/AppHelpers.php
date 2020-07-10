<?php

class AppHelpers
{
  /**
   * Generate a URL to an application asset with a versioned timestamp parameter.
   * @param $path
   * @param null $secure
   * @return string
   */
  static function versioned_asset($path, $secure = null)
  {
    $manifest_path = base_path() . "/public/mix-manifest.json";
    if (!File::exists($manifest_path)) {
      $timestamp = @filemtime(public_path($path)) ?: 0;
      $p = asset($path, $secure) . '?' . $timestamp;
    } else {

      try {
        $file = File::get($manifest_path);
        $json = json_decode($file, true);
        $versioned = $json[$path];
        if ($versioned) {
          $p = $versioned;
        }
      } catch (\Throwable $th) {
        $p = $path;
      }
    }

    return $p;
  }
}
