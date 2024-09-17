type VoteOptionType = {
    id: number;
    label: string;
    vote: number;
}
interface VotingAppI<T> {
    selectItem(item: T): void;
    showItens(): void
}
class VotingApp<T extends VoteOptionType> implements VotingAppI<T> {
    private _optionsList: T[]
    constructor(
        optionsList: T[] | T
    ) {
        this._optionsList = Array.isArray(optionsList) ? [...optionsList] : [optionsList]
    }
    selectItem(item: T): void {
        this.vote(item.id)
        this.showItens()
    }
    showItens(): void {
        console.table(this.optionsList)
    }
    vote(id: number): void {
        let isConfirmed = false
        if (this._optionsList.length > 0)
            this._optionsList.forEach((option, index: number) => {
                if (option.id === id) {
                    option.vote++
                    isConfirmed = true
                }
            })
        if (!isConfirmed) console.log('Erro ao processar seu voto, verifique a sua selecao e tente novamente!')
    }
    get optionsList(): T[] {
        return this._optionsList
    }
    set optionsList(item: T) {
        this._optionsList.push(item)
    }
}
const VotingOptions: VoteOptionType[] = [{
    id: 1, label: 'Python', vote: 0
}, {
    id: 2, label: 'TypeScript', vote: 0
}, {
    id: 3, label: 'JavaScript', vote: 0
}, {
    id: 4, label: 'Node', vote: 0
},]

const vote = new VotingApp(VotingOptions)

vote.vote(3)
vote.showItens()