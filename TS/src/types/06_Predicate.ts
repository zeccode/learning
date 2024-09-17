{
    // A função isAdult retorna true ou false com base na idade do usuário.
    // O "user is User" não só retorna true se o usuário for adulto, 
    // mas também informa ao TypeScript que, quando a função retorna true, 
    // tambem retorna ao escopo "pai" que o objeto user é do tipo User.

    type User = {
        name: string;
        age: number;
    };

    const users: User[] = [
        { name: "Ana", age: 16 },
        { name: "Bruno", age: 22 },
        { name: "Carlos", age: 19 },
        { name: "Daniela", age: 17 }
    ];

    function isAdult(user: User): user is User {
        return user.age >= 18;
    }

    const adults = users.filter(isAdult);

    console.log(adults);
    // Resultado: [{ name: "Bruno", age: 22 }, { name: "Carlos", age: 19 }]
}