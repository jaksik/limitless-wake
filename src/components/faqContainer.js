import React from 'react'
import Faq from "./faqItem"
import Questions from "../data/faq.json"
import "./faq.css"

const FaqContainer = () => (
    <div className="faqContainer">
        <h3>FAQ</h3>
        {Questions.map(data => (
            <Faq
                question={data.question}
                answer={data.answer}
            />
        ))}
    </div>
)

export default FaqContainer