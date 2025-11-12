
function analyzeFeedback(feedback) {
  let words = feedback.split(" ").length;
  let negative =
    feedback.toLowerCase().includes("bad") ||
    feedback.toLowerCase().includes("poor");

  if (!negative) {
    console.log("Positive Feedback");
  } else {
    console.log(" Needs Improvement");
  }

  console.log(`

Feedback: "${feedback}"
Word Count: ${words}
Contains 'bad' or 'poor'? ${negative}
`);
}

let feedback1 = "Great product!";
let feedback2 = "Poor battery life and bad sound quality.";

analyzeFeedback(feedback1);
analyzeFeedback(feedback2);
