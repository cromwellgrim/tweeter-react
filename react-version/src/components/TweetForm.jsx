import React from 'react'

function TweetForm() {

  const placeHolder = "What are you humming about?";
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('oof');
  }

  return (
    <section className="newtweet">
    <form method="post" action="/tweets" className="newtweet__form" onSubmit={handleSubmit}>
      <textarea className="form__textarea" name="text" placeholder={placeHolder}></textarea>
      <input type="submit" value="Tweet" className="form__input" />
      <span className="form__counter">140</span>
    </form>
  </section>
  );

}

export default TweetForm;