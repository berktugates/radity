export async function getEstimate(rate:number, hours:number){
    const res = await fetch('http://localhost:5001/estimation', {
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