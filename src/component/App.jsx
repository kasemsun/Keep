import React from "react";
import Footer from "./Footer"
import Header from "./Header";
import Note from "./Note";
import Notes from "../notes"

export default function(){
    return (
      <>
        <Header />
        <>{Notes.map((note)=>
            <Note key={note.id} title={note.title} content={note.content}/>
        )}</>
        
        <Footer />
      </>
    );
}