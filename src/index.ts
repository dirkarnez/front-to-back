import './styles/index.scss';

// export function sum(a: number, b: number): number {
//     return a + b;
// }

import "reflect-metadata";

const formatMetadataKey = Symbol("format");

interface Element {
    typeName: Type
    name: string
}

let arr: Element[] = [];

enum Type {
    Plain = "text",
    Email = "email",
    Password = "password"
}

function input(typeName: Type, name: string) {
    const ret = Reflect.metadata(formatMetadataKey, typeName);
    arr.push({typeName, name});
    return ret;
}

class Form {
    @input(Type.Plain, "name")
    name: string = "";

    @input(Type.Email, "email")
    email: string = "";

    @input(Type.Password, "password")
    password: string = "";

    birthday: Date = new Date();

    generateForm() {
        return arr.map(element => (
            `<input type="${element.typeName}" name="${element.name}">`
        ))
        .join("</br>\n");
    }
}


console.log(new Form().generateForm());