function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD

    let d = new Date(userDate)

    console.log(d.getDate())
  }
  
  console.log(formatDate("12/31/2014"));
