import React from 'react'

export default function Index() {

  var ch='sample case';
  var ch1 = ch.split('');
  let hasil = [];
  let hasil2 = []
  
  for (let x = 0; x < ch1.length; x++) {

      if(ch1[x]==='a' || ch1[x]==='e' || ch1[x]==='i' || ch1[x]==='o' || ch1[x]==='u'){
        hasil.push(ch1[x])
      } else if (ch1[x]===' ') {
        
      } else {
        hasil2.push(ch1[x])
      }
    
  }
  console.log('Vovel Characters :');
  console.log(hasil.join(""));
  console.log('Consonant Characters :');
  console.log(hasil2.join(''));

  return (
    <div>index</div>
  )
}
