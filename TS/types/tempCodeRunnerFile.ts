function typeGuardfn(params: unknown): string {
        return typeof params === 'string' ? params.toUpperCase() : 'error'
    }
    console.log(typeGuardfn('teste'))