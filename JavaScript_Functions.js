function assignedScore(score) {
  if (score >= 90) {
    return "WOW! You scored an A!";
  } else if (score >= 80) {
    return "Nice! You scored a B!";
  } else if (score >= 70) {
    return "Not bad! You scored a C!";
  } else if (score >= 60) {
    return "Keep trying! You scored a D!";
  } else {
    return "Uh oh! You scored an F!";
  }
}

alert(assignedScore(91));
