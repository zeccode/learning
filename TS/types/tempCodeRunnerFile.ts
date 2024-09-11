    function process(valor: string): string
    function process(valor: number): number
    function process(valor: unknown): unknown {
        if (typeof valor === 'string') return valor.toUpperCase()
        if (typeof valor === 'number') return valor * valor
    }
    console.log(process(5))