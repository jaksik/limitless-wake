import React from 'react'
import Faq from "./faqItem"
import Questions from "../data/faq.json"
import "./faq.css"

const FaqContainer = () => (
    <div>
        <h3>FAQ</h3>
        <div className="faqContainer">
            {Questions.map(data => (
                <Faq
                    question={data.question}
                    answer={data.answer}
                />
            ))}
        </div>
    </div>
)

export default FaqContainer