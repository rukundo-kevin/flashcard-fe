import React from "react";
import { useQuery, gql } from '@apollo/client';

import Flashcard from "./Flashcard";

const FLASHCARD_QUERY = gql`
  {
    flashcards {
      id
      title
      question
      answer
      createdBy{
        names
      }
    }
  }
`
;

const FlashcardList = () =>{
      const { data } = useQuery(FLASHCARD_QUERY);
      console.log(data)
    return(
        <>
        {data && 
        <div className="container mx-auto text-gray-900  font-sans p-2 antialiased">
          <div className="flex flex-wrap -mx-4">
            { 
            (
              data.flashcards.map(({ id, answer, question, title }) => (
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
        }
      </>
    )
}

export default FlashcardList;
