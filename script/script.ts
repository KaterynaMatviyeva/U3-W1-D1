const costoAlMinuto: number = 0.2;

interface Smartphone {
  credit: number;
  chiamate: number;
}

class User implements Smartphone {
  name: string;
  lastName: string;
  credit: number = 0;
  chiamate: number = 0;

  constructor(_name: string, _lastName: string) {
    this.name = _name;
    this.lastName = _lastName;
  }
  ricarica(ammontare: number): void {
    this.credit += ammontare;
  }
  minutiInChiamata(minuti: number): void {
    if (this.credit - minuti * costoAlMinuto < 0) {
      console.log("credito insufficiente per effettuare la chiamata");
      return;
    }
    this.credit -= minuti * costoAlMinuto;
    this.chiamate += 1;
  }
  creditoResiduo(): number {
    return this.credit;
  }
  quantitaDelleChiamate(): number {
    return this.chiamate;
  }
  azzeraChiamate(): void {
    this.chiamate = 0;
  }
}

const user1 = new User("Kateryna", "Matviyeva");
user1.minutiInChiamata(2)

user1.ricarica(20);
console.log("credito residuo dopo la ricarica",user1.creditoResiduo())
user1.minutiInChiamata(2);
user1.minutiInChiamata(1);
user1.minutiInChiamata(3);

console.log("credito residuo dopo le chiamate",user1.creditoResiduo());
console.log("quante chiamate abbiamo effettuato",user1.quantitaDelleChiamate());
user1.azzeraChiamate()
console.log("quantità delle chiamate dopo l'azzeramento",user1.quantitaDelleChiamate())


