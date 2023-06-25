import { useEffect, useState } from "react"

const Header = () => {
    const [loading, setLoading] = useState(true)
    const [quote, setQuote] = useState(null)
    const getQuote = async () => {
        setLoading(true)
        const _quote = getQuoteFromLocalStorage();
        var q
        if (!_quote) {
            const quotePromise = await fetch("https://api.api-ninjas.com/v1/quotes", {
                method: 'GET',
                headers: { 'X-Api-Key': 'OZiO+MDHhJKrovXdPqJk9w==g9fcCOuloh5Ks6a2' },
            })
            q = await quotePromise.json()
            setQuoteToLocalStorage(q)
        }else{
            q = _quote
        }
        setLoading(false)
        console.log(q)
        setQuote(q)
    }

    const getQuoteFromLocalStorage = () => {
        const _quote = localStorage.getItem("__quoteOfTheDay__")
        if (_quote) {
            const parsedQuote = JSON.parse(_quote)
            const date = new Date(parsedQuote.generatedAt)
            if (date.getFullYear() === new Date().getFullYear() && date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
                return parsedQuote.data
            } else {
                return null
            }
        }
    }
    const setQuoteToLocalStorage = (q) => {
        const _quote = {
            generatedAt: new Date().toISOString(),
            data: q
        }
        localStorage.setItem("__quoteOfTheDay__", JSON.stringify(_quote))
    }

    return <div className="header">
        <div className="header-image">
            <img className="image" src="/book.webp" onClick={getQuote} />
            {!loading && quote && <span className="chat-bubble">{quote[0].quote} - <i>{quote[0].author}</i></span>}
        </div>

        <div className="header-image">
            <button className="contact-btn button-3d" onClick={() => window.location = 'mailto:sudeep014@gmail.com'}>
                Email
                <img className="image" src="/email.png" />
            </button>
        </div>
    </div>
}

export default Header