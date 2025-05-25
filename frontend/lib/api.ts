export async function getEstimate(rate:number, hours:number){
    const res = await fetch('https://radity-case-uq5s.onrender.com/estimation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rate, hours }),
      });
      if(!res.ok){
        throw new Error(`Failed to fetch`)
      }
      return res.json();
}