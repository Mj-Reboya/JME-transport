import { TestBed } from '@angular/core/testing';

import { PdfDownloaderService } from './pdf-downloader.service';

describe('PdfDownloaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PdfDownloaderService = TestBed.get(PdfDownloaderService);
    expect(service).toBeTruthy();
  });
});
