import React from "react";
import Flashcard from "./Flashcard";

const FlashcardList = () =>{
    const flashcards = [
        {
          id: 'link-id-1',
          question:
            'Prisma gives you a powerful database toolkit 😎',
          answer: 'https://prisma.io',
          title: 'https://prisma.io'
        },
        {
            id: 'link-id-1',
            question:
              'Prisma gives you a powerful database toolkit 😎',
            answer: 'https://prisma.io',
            title: 'https://prisma.io'
          },
      ];
    return(
        <>
        <div className="container mx-auto text-gray-900  font-sans p-2 antialiased">
          <div className="flex flex-wrap -mx-4">
            { 
            (
              flashcards.map(({ id, answer, question, title }) => (
                <Flashcard
                  key={id}
                  answer={answer}
                  question={question}
                  title={title}
                />
              ))
            ) 
            }
          </div>
        </div>
      </>
    )
}

export default FlashcardList;
