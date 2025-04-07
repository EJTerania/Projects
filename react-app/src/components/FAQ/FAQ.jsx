import { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [lists] = useState([
        { question: "What is Team Dugong Bughaw?", answer: "Team Dugong Bughaw, with Project High Five: Youth Alliance against HIV and AIDS, is a non-profit, non-political organization that aims for a #healthierPH and a healthier Iloilo City by gathering the Iloilo City youth through universities/colleges to advocate for HIV and AIDS awareness. Team Dugong Bughaw was founded in 2015 and since then, it has been awarded as a recipient of the Ten Accomplished Youth Organizations (TAYO) and a national finalist of Unilab Foundation Ideas Positive."},
        { question: "What does Team Dugong Bughaw do?", answer: "Team Dugong Bughaw, with Project High Five: Youth Alliance against HIV and AIDS, is a non-profit, non-political organization that aims for a #healthierPH and a healthier Iloilo City by gathering the Iloilo City youth through universities/colleges to advocate for HIV and AIDS awareness. Team Dugong Bughaw was founded in 2015 and since then, it has been awarded as a recipient of the Ten Accomplished Youth Organizations (TAYO) and a national finalist of Unilab Foundation Ideas Positive."},
        { question: "Who are the members of Team Dugong Bughaw?", answer: "Team Dugong Bughaw consists of Secondary and Tertiary  level students and professionals from different fields in Iloilo who advocate for HIV awareness and education. "},
        { question: "How can I join TDB?", answer: "Applications are open annually to welcome new members who wish to be part of Team Dugong Bughaw. The application steps are as follows: paper application, interview and lastly, the chosen applicants take part in the Youth Alliance Initiative to complete the application process. After that, you are now officially part of the team!"},
        { question: "Who are the founders of TDB?", answer: "Team Dugong Bughaw started off in 2015 as an entry team in Ideas Positive Run 6 under Unilab Foundation with five members who were all then studying at University of the Philippines Visayas – Alexis, Jasper, Anjelou, Geeza, and Abigail. The five-member team was a mix of students taking up Public Health, Biology, and Communication and Media Studies. The team’s diversity was due to the fact that the members were already well-acquainted with each other, being classmates while taking up secondary education at Iloilo National High School-Special Science Class. They have also gained their humanitarian spirit through their high school experiences so despite the weight of academics and other extra-curricular ventures, the five still pursued to start an advocacy through Project High Five. The five then became seven with Jenn and Julius, two other Public Health students. Ten years later, these once aspiring advocates are now a mix of medical students, doctors, and development professionals."},
        { question: "What programs does TDB offer?", answer: "Team Dugong Bughaw offers educational seminars and workshops about HIV awareness, also known as ‘Project High Five’. We also partner with different schools, organizations, NGOs and companies for speaking engagements, workshops, HIV screening, and provision of condoms, lubricants, and PrEP (pre-exposure prophylaxis)"},
        { question: "Does TDB offer free HIV and STI screening?", answer: `Yes! We have certified CBS Motivators. You can reach out to: \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \n0945 105 0335 Mark Anthony Gallego \n0917 655 2236 Andy Martin Evidente`},
        { question: `What happens during the HIV screening \nprocess? Do I have to prepare anything?`, answer: `These are what you can expect during an HIV Screening process:
You will be in a private room or private setting with the CBS motivator. Consent will be obtained An HIV Risk Assessment interview Screening procedure: The CBS motivator will do a small prick on your finger to get a few drops of blood which will be the specimen used for the HIV screening. Results will be ready within 15-30 minutes.
The CBS motivator will then interpret the results for you. Rest assured that your identity and your screening results will strictly remain confidential. If you have any questions and/or concerns, your CBS motivator will be there to guide you.
`},
        { question: "Our organization wants to partner with TDB \nfor an event. Where do we send our letter \nand to whom should we address it?", answer: `If you wish to partner with Team Dugong Bughaw, you can reach us via email at teamdugongbughaw@gmail.com
You may address it to our Partnerships Manager, Ms. Rain Labiano. Also, please log the details of your event in our Blueprint: <a href="https://docs.google.com/forms/d/e/1FAIpQLSf0ncpLrztjgK32f4LoYmzf1Z-HPf8xqw3pbwv6FrHvAQakAA/viewform" target="_blank">Click Here</a>. 
`},
    ]);
    
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    
    return (
        <section className="faq-section">
            <h2 className="faq-title">FAQs</h2>
            {lists.map((list, index) => (  
                <div key={index} className={`faq ${activeIndex === index ? "active" : ""}`} onClick={() => toggleFAQ(index)}>
                    <div className="faq-question">
                    <h3>{list.question}</h3>
                        <svg width="15" height="10" viewBox="0 0 42 25">
                            <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="faq-answer">
                        <p dangerouslySetInnerHTML={{ __html: list.answer }}/>
                    </div>
                </div>
            ))}
        </section>
    );
};


export default FAQ;
