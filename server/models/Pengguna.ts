// siti robiah , NIM : 301042400058

export class Pengguna {
  // Atribut Private (ditandai dengan tanda minus '-' pada diagram)
  private _userId: string;
  private _nama: string;
  private _password: string;
  private _email: string;

  constructor(
    userId: string = '',
    nama: string = '',
    email: string = '',
    password: string = ''
  ) {
    this._userId = userId;
    this._nama = nama;
    this._email = email;
    this._password = password;
  }

  // Getter dan Setter untuk mengakses atribut private
  public get userId(): string {
    return this._userId;
  }
  public set userId(value: string) {
    this._userId = value;
  }

  public get nama(): string {
    return this._nama;
  }
  public set nama(value: string) {
    this._nama = value;
  }

  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  // --- Public Methods (ditandai dengan '+' pada diagram) ---

  // + login(email, password): void
  public login(email: string, password: string): void {
    if (!email || !password) {
      throw new Error('Email dan password wajib diisi.');
    }
    this._email = email;
    this._password = password;
    console.log(`Proses login berhasil untuk: ${this._email}`);
  }

  // + register(email, password, confirmPassword): void
  public register(
    email: string,
    password: string,
    confirmPassword: string
  ): void {
    if (password !== confirmPassword) {
      throw new Error('Password dan Konfirmasi Password tidak cocok!');
    }
    this._email = email;
    this._password = password;
    console.log(`Registrasi berhasil untuk email: ${this._email}`);
  }

  // + verifyLogin(): boolean
  public verifyLogin(): boolean {
    // Memeriksa apakah status login pengguna valid
    return this._email.length > 0 && this._password.length > 0;
  }

  // + infoPengguna(): Pengguna
  public infoPengguna(): Pengguna {
    // Mengembalikan instance diri sendiri (Pengguna)
    return this;
  }
}