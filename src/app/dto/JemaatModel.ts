export interface JemaatModel {
  id: number;
  namaJemaat: string;
  nomorKTP: string;
  alamatJemaat: string;
  kodepost: number;
  nomorTelp: string;
  tanggalLahir: Date;
  email: string;
  /**
   * 1. Menikah
   * 2. Duda/Janda
   * 3. Single
   */
  statusJemaat: number;
  /**
   * 1. Jemaat Komit
   * 2. Participants
   */
  statusKeanggotaan: number;
}
