class CommandNotFoundError extends Error {
    constructor(message) {
        super(message)
        this.name = 'CommandNotFoundError'
        this.message = (message + ': command not found')
    }
}

class AddressNotFoundError extends Error {
    constructor(message) {
        super(message)
        this.message = (`Error : address ` + message + ` can't be reached`)
    }
}

class AddressIsEmptyError extends Error {
    constructor(message) {
        super(message)
        this.message = (`Error: You need to specify an address`)
    }
}

class UsernameIsEmptyError extends Error {
    constructor(message) {
        super(message)
        this.message = ([`This isn't a valid ID.`,`Try: login id@pass`])
    }
}

class MailServerIsEmptyError extends Error {
    constructor(message) {
        super(message)
        this.message = (`There is no new mail registered.`)
    }
}