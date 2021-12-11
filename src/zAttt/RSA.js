import bigInt from "big-integer";

class RSA {
    static randomPrime(bits) {
            //1.pow(2,(bit -1))
            const min = bigInt.one.shiftLeft(bits - 1);
            const max = bigInt.one.shiftLeft(bits).prev();

            while (true) {
                let p = bigInt.randBetween(min, max);
                if (p.isProbablePrime(256)) {
                    return p;
                }
            }
        }
        //generate pub, private key
        //RSA
    static generate(keysize) {
            const e = bigInt(65537);
            let p;
            let q;
            let totient;

            do {
                p = this.randomPrime(keysize / 2);
                q = this.randomPrime(keysize / 2);
                totient = bigInt.lcm(
                    //BCNN(p-1,q-1)
                    p.prev(),
                    q.prev()
                );
            } while (
                bigInt.gcd(e, totient).notEquals(1) ||
                p
                .minus(q)
                .abs()
                .shiftRight(keysize / 2 - 100)
                .isZero()
            );

            return {
                e,
                //n=p.q
                n: p.multiply(q),
                //de mod totient = 1
                d: e.modInv(totient),
            };
        }
        //public key (n, e) và giải mã với private key (n,d)

    //function support
    // c = pow(m,e) mod n
    static encrypt(encodedMsg, n, e) {
        return bigInt(encodedMsg).modPow(e, n);
    }

    // m = pow(c,d) mod n
    static decrypt(encryptedMsg, d, n) {
        return bigInt(encryptedMsg).modPow(d, n);
    }

    //encode and decode
    //Chuyển plain text thành dãy số nguyên
    // m = RSA.encode(M)
    static encode(str) {
        const codes = str
            .split("")
            .map((i) => i.charCodeAt())
            .join("");

        return bigInt(codes);
    }

    // m to plain text
    static decode(code) {
        const stringified = code.toString();
        let string = "";

        for (let i = 0; i < stringified.length; i += 2) {
            let num = Number(stringified.substr(i, 2));
            //TH1 < 30 : Không đổi được
            //nhỏ hơn 30 lấy thêm 1 số
            if (num <= 30) {
                string += String.fromCharCode(Number(stringified.substr(i, 3)));
                i++;
            }
            //TH2 >= 30 : Đổi đổi được
            //lớn hơn 30 đổi về char
            else {
                string += String.fromCharCode(num);
            }
        }

        return string;
    }
}

// module.exports = RSA;
export default RSA;