const players = [
  {
    "name": "Lionel Messi",
    "photo": "https://cdn.sofifa.net/players/158/023/25_120.png",
    "position": "RW",
    "nationality": "Argentina",
    "flag": "https://cdn.sofifa.net/flags/ar.png",
    "club": "Inter Miami",
    "logo": "https://cdn.sofifa.net/meta/team/239235/120.png",
    "rating": 93,
    "pace": 85,
    "shooting": 92,
    "passing": 91,
    "dribbling": 95,
    "defending": 35,
    "physical": 65
  },
  {
    "name": "Cristiano Ronaldo",
    "photo": "https://cdn.sofifa.net/players/020/801/25_120.png",
    "position": "ST",
    "nationality": "Portugal",
    "flag": "https://cdn.sofifa.net/flags/pt.png",
    "club": "Al Nassr",
    "logo": "https://cdn.sofifa.net/meta/team/2506/120.png",
    "rating": 91,
    "pace": 84,
    "shooting": 94,
    "passing": 82,
    "dribbling": 87,
    "defending": 34,
    "physical": 77
  },
  {
    "name": "Kylian Mbappé",
    "photo": "https://cdn.sofifa.net/players/231/747/25_120.png",
    "position": "ST",
    "nationality": "France",
    "flag": "https://cdn.sofifa.net/flags/fr.png",
    "club": "Real Madrid",
    "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
    "rating": 92,
    "pace": 97,
    "shooting": 89,
    "passing": 80,
    "dribbling": 92,
    "defending": 39,
    "physical": 77
  },
  {
    "name": "Virgil van Dijk",
    "photo": "https://cdn.sofifa.net/players/203/376/25_120.png",
    "position": "CB",
    "nationality": "Netherlands",
    "flag": "https://cdn.sofifa.net/flags/nl.png",
    "club": "Liverpool",
    "logo": "https://cdn.sofifa.net/meta/team/8/120.png",
    "rating": 90,
    "pace": 75,
    "shooting": 60,
    "passing": 70,
    "dribbling": 72,
    "defending": 92,
    "physical": 86
  },
  {
    "name": "Antonio Rudiger",
    "photo": "https://cdn.sofifa.net/players/205/452/25_120.png",
    "position": "CB",
    "nationality": "Germany",
    "flag": "https://cdn.sofifa.net/flags/de.png",
    "club": "Real Madrid",
    "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
    "rating": 88,
    "pace": 82,
    "shooting": 55,
    "passing": 73,
    "dribbling": 70,
    "defending": 86,
    "physical": 86
  },
  {
    "name": "Neymar Jr",
    "photo": "https://cdn.sofifa.net/players/190/871/25_120.png",
    "position": "LW",
    "nationality": "Brazil",
    "flag": "https://cdn.sofifa.net/flags/br.png",
    "club": "Al-Hilal",
    "logo": "https://cdn.sofifa.net/meta/team/7011/120.png",
    "rating": 90,
    "pace": 91,
    "shooting": 83,
    "passing": 86,
    "dribbling": 94,
    "defending": 37,
    "physical": 61
  },
  {
    "name": "Mohamed Salah",
    "photo": "https://cdn.sofifa.net/players/192/985/25_120.png",
    "position": "RW",
    "nationality": "Egypt",
    "flag": "https://cdn.sofifa.net/flags/eg.png",
    "club": "Liverpool",
    "logo": "https://cdn.sofifa.net/meta/team/8/120.png",
    "rating": 89,
    "pace": 93,
    "shooting": 87,
    "passing": 81,
    "dribbling": 90,
    "defending": 45,
    "physical": 75
  },
  {
    "name": "Joshua Kimmich",
    "photo": "https://cdn.sofifa.net/players/212/622/25_120.png",
    "position": "CM",
    "nationality": "Germany",
    "flag": "https://cdn.sofifa.net/flags/de.png",
    "club": "Bayern Munich",
    "logo": "https://cdn.sofifa.net/meta/team/503/120.png",
    "rating": 89,
    "pace": 70,
    "shooting": 75,
    "passing": 88,
    "dribbling": 84,
    "defending": 84,
    "physical": 81
  },
  {
    "name": "Jan Oblak",
    "photo": "https://cdn.sofifa.net/players/200/389/25_120.png",
    "position": "GK",
    "nationality": "Slovenia",
    "flag": "https://cdn.sofifa.net/flags/si.png",
    "club": "Atletico Madrid",
    "logo": "https://cdn.sofifa.net/meta/team/7980/120.png",
    "rating": 91,
    "diving": 89,
    "handling": 90,
    "kicking": 78,
    "reflexes": 92,
    "speed": 50,
    "positioning": 88
  },
  {
    "name": "Luka Modrić",
    "photo": "https://cdn.sofifa.net/players/177/003/25_120.png",
    "position": "CM",
    "nationality": "Croatia",
    "flag": "https://cdn.sofifa.net/flags/hr.png",
    "club": "Real Madrid",
    "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
    "rating": 88,
    "pace": 74,
    "shooting": 78,
    "passing": 89,
    "dribbling": 90,
    "defending": 72,
    "physical": 65
  },
  {
    "name": "Vinicius Junior",
    "photo": "https://cdn.sofifa.net/players/238/794/25_120.png",
    "position": "LW",
    "nationality": "Brazil",
    "flag": "https://cdn.sofifa.net/flags/br.png",
    "club": "Real Madrid",
    "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
    "rating": 89,
    "pace": 91,
    "shooting": 88,
    "passing": 85,
    "dribbling": 94,
    "defending": 39,
    "physical": 61
  },
  {
    "name": "Brahim Diáz",
    "photo": "https://cdn.sofifa.net/players/231/410/25_120.png",
    "position": "LW",
    "nationality": "Morocco",
    "flag": "https://cdn.sofifa.net/flags/ma.png",
    "club": "Real Madrid",
    "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
    "rating": 82,
    "pace": 85,
    "shooting": 74,
    "passing": 78,
    "dribbling": 85,
    "defending": 31,
    "physical": 56
  },
  {
    "name": "Karim Benzema",
    "photo": "https://cdn.sofifa.net/players/165/153/25_120.png",
    "position": "ST",
    "nationality": "France",
    "flag": "https://cdn.sofifa.net/flags/fr.png",
    "club": "Al-Ittihad",
    "logo" :"https://cdn.sofifa.net/meta/team/476/120.png",
    "rating": 90,
    "pace": 77,
    "shooting": 90,
    "passing": 83,
    "dribbling": 88,
    "defending": 40,
    "physical": 78
  },
  {
    "name": "Erling Haaland",
    "photo": "https://cdn.sofifa.net/players/239/085/25_120.png",
    "position": "ST",
    "nationality": "Norway",
    "flag": "https://cdn.sofifa.net/flags/no.png",
    "club": "Manchester City",
    "logo": "https://cdn.sofifa.net/players/239/085/25_120.png",
    "rating": 91,
    "pace": 89,
    "shooting": 94,
    "passing": 65,
    "dribbling": 80,
    "defending": 45,
    "physical": 88
  },
  {
    "name": "N'Golo Kanté",
    "photo": "https://cdn.sofifa.net/players/215/914/25_120.png",
    "position": "CDM",
    "nationality": "France",
    "flag": "https://cdn.sofifa.net/flags/fr.png",
    "club": "Al-Ittihad",
    "logo": "https://cdn.sofifa.net/meta/team/476/120.png",
    "rating": 87,
    "pace": 77,
    "shooting": 66,
    "passing": 75,
    "dribbling": 82,
    "defending": 88,
    "physical": 82
  },
  {
    "name": "Alphonso Davies",
    "photo": "https://cdn.sofifa.net/players/234/396/25_120.png",
    "position": "LB",
    "nationality": "Canada",
    "flag": "https://cdn.sofifa.net/flags/ca.png",
    "club": "Bayern Munich",
    "logo": "https://cdn.sofifa.net/meta/team/503/120.png",
    "rating": 84,
    "pace": 96,
    "shooting": 68,
    "passing": 77,
    "dribbling": 82,
    "defending": 76,
    "physical": 77
  },
  {
    "name": "Yassine Bounou",
    "photo": "https://cdn.sofifa.net/players/209/981/25_120.png",
    "position": "GK",
    "nationality": "Morocco",
    "flag": "https://cdn.sofifa.net/flags/ma.png",
    "club": "Al-Hilal",
    "logo": "https://cdn.sofifa.net/meta/team/7011/120.png",
    "rating": 84,
    "diving": 81,
    "handling": 82,
    "kicking": 77,
    "reflexes": 86,
    "speed": 38,
    "positioning": 83
  },
  {
    "name": "Bruno Fernandes",
    "photo": "https://cdn.sofifa.net/players/212/198/25_120.png",
    "position": "CM",
    "nationality": "Portugal",
    "flag": "https://cdn.sofifa.net/flags/pt.png",
    "club": "Manchester United",
    "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
    "rating": 88,
    "pace": 75,
    "shooting": 85,
    "passing": 89,
    "dribbling": 84,
    "defending": 69,
    "physical": 77
  },
  {
    "name": "Jadon Sancho",
    "photo": "https://cdn.sofifa.net/players/233/049/25_120.png",
    "position": "LW",
    "nationality": "England",
    "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
    "club": "Manchester United",
    "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
    "rating": 84,
    "pace": 85,
    "shooting": 74,
    "passing": 78,
    "dribbling": 88,
    "defending": 34,
    "physical": 63
  },
  {
    "name": "Trent Alexander-Arnold",
    "photo": "https://cdn.sofifa.net/players/231/281/25_120.png",
    "position": "RB",
    "nationality": "England",
    "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
    "club": "Liverpool",
    "rating": 87,
    "pace": 76,
    "shooting": 66,
    "passing": 89,
    "dribbling": 80,
    "defending": 79,
    "physical": 71
  },
  {
    "name": "Achraf Hakimi",
    "photo": "https://cdn.sofifa.net/players/235/212/25_120.png",
    "position": "RB",
    "nationality": "Morocco",
    "flag": "https://cdn.sofifa.net/flags/ma.png",
    "club": "Paris Saint-Germain",
    "logo": "https://cdn.sofifa.net/meta/team/591/120.png",
    "rating": 84,
    "pace": 91,
    "shooting": 76,
    "passing": 80,
    "dribbling": 80,
    "defending": 75,
    "physical": 78
  },
  {
    "name": "Youssef En-Nesyri",
    "photo": "https://cdn.sofifa.net/players/235/410/25_120.png",
    "position": "ST",
    "nationality": "Morocco",
    "flag": "https://cdn.sofifa.net/flags/ma.png",
    "club": "Fenerbahçe",
    "logo": "https://cdn.sofifa.net/meta/team/88/120.png",
    "rating": 83,
    "pace": 82,
    "shooting": 82,
    "passing": 63,
    "dribbling": 77,
    "defending": 36,
    "physical": 80
  },
  {
    "name": "Noussair Mazraoui",
    "photo": "https://cdn.sofifa.net/players/236/401/25_120.png",
    "position": "LB",
    "nationality": "Morocco",
    "flag": "https://cdn.sofifa.net/flags/ma.png",
    "club": "Manchester United",
    "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
    "rating": 81,
    "pace": 78,
    "shooting": 66,
    "passing": 77,
    "dribbling": 83,
    "defending": 77,
    "physical": 71
  },
  {
    "name": "Ismael Saibari",
    "photo": "https://cdn.sofifa.net/players/259/480/25_120.png",
    "position": "CM",
    "nationality": "Morocco",
    "flag": "https://cdn.sofifa.net/flags/ma.png",
    "club": "PSV",
    "logo": "https://cdn.sofifa.net/meta/team/682/120.png",
    "rating": 83,
    "pace": 89,
    "shooting": 78,
    "passing": 80,
    "dribbling": 86,
    "defending": 55,
    "physical": 84
  },
  {
    "name": "Donnarumma",
    "photo": "https://cdn.sofifa.net/players/230/621/25_120.png",
    "position": "GK",
    "nationality": "Italy",
    "flag": "https://cdn.sofifa.net/flags/it.png",
    "club": "Paris Saint-Germain",
    "logo": "https://cdn.sofifa.net/meta/team/591/120.png",
    "rating": 89,
    "diving": 88,
    "handling": 84,
    "kicking": 75,
    "reflexes": 90,
    "speed": 50,
    "positioning": 85
  }
]

let playerModal = document.getElementById("playerModal")
let btnNewPlayer = document.getElementById("newPlayer");
let suggest =[];
let mainplayers =[];
let substitutes =[];
//  this is the new player button removing the hiiden of the modale
document.getElementById("newPlayer").addEventListener('click', () => playerModal.classList.remove('hidden') )
//  this is the cancel button adding the hiiden of the modale
document.getElementById("cancel").addEventListener('click', () => playerModal.classList.add('hidden') )




const playerPosition = playerModal.querySelector("#position");
playerPosition.addEventListener('change', function () {
  console.log("test modal")
    let position = playerPosition.value;
    const playerStats = document.getElementById('playerStats');
    const GKStats = document.getElementById('GKStats');
  
    if (position == 'GK') {
      GKStats.classList.remove('hidden');
      playerStats.classList.add('hidden');
    } else {
      GKStats.classList.add('hidden');
      playerStats.classList.remove('hidden');
    }
  });


// i suggest players here
function suggestPlayers(pos ) {
    
    document.querySelector(".suggestion").classList.remove("hidden")
    if (pos== "all") {
        displayPlayers(players);
       
    } else {

     
        let id = event.currentTarget.parentElement.id;

        console.log(id);
        
        suggest= players.filter(player => player.position.toLowerCase() === pos.toLowerCase())
        console.log(id)
        displaySuggestions(suggest ,id);
    }   
}  

// here i sugesst all the players 
function displayPlayers(param) {
 
    const suggestedPlayers = document.querySelector(".suggested-players");
    suggestedPlayers.innerHTML=``;
    param.forEach((elem ,index) => {
        if (elem.position=="GK") {
            suggestedPlayers.innerHTML +=`<div  class="relative h-[100px] w-[90px] md:h-[140px] md:w-[110px] lg:h-[180px] lg:w-[150px]">
            <div class="absolute  inset-0"> <img class="h-full w-full" src="./images/gold84.png" alt=""></div>
            <div onclick=" addSubstitutes(${index})" class="absolute  inset-0 flex flex-col ">
                <div class="flex h-[50%] justify-between">
                    <div class="w-[20%]  pt-1 pl-2 md:pt-3  lg:pt-4 lg:pl-3">
                        <div class="text-[18px] md:text-[20px] font-bold">${elem.rating}</div>
                        <div class="text-[14px] md:text-[16px] font-semibold font-mono mt-[-7px]">${elem.position}</div>
                    </div>
                    <div class="w-[80%]" >
                        <img class="h-full w-full " src="${elem.photo}" alt="">
                    </div>
                </div>              
                <div class="flex flex-col items-center h-[45%]">
                    <div class="text-[10px] md:text-[12px] font-medium lg:text-[14px] w-[80%] truncate " >${elem.name}</div>
                    <div class="static-infos flex  gap-[2px] lg:gap-1">
                        <div >
                            <div class=" text-[6px] md:text-[8px] lg:text-[10px] font-normal" >Pos</div>
                            <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.positioning}</div>
                        </div>
                        <div>
                            <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">Div</div>
                            <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium" >${elem.diving}</div>
                        </div>
                        <div>
                            <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">Han</div>
                            <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.handling}</div>
                        </div>
                        <div>
                            <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">Kic</div>
                            <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.kicking}</div>
                        </div>
                        <div>
                            <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">Ref</div>
                            <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.reflexes}</div>
                        </div>
                        <div>
                            <div class="text-[6px]  md:text-[8px] lg:text-[10px] font-normal">Spe</div>
                            <div class=" mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.speed}</div>
                        </div>
                    </div>
                    <div class="logos flex justify-center mt-[-2px] gap-1 lg:gap-[6px] items-center">
                        <div><img class="w-2 md:w-3 lg:w-5" src="${elem.flag}" alt=""></div>
                        <div><img class="w-2 md:w-3 lg:w-5" src="${elem.logo}" alt=""></div>
                    </div>
                </div>              
            </div>
        </div>`; 
            
        } else {
          console.log(index);
          console.log(elem.logo);
 
          suggestedPlayers.innerHTML +=`<div class="relative h-[100px] w-[90px] md:h-[140px] md:w-[110px] lg:h-[180px] lg:w-[150px]">
          <div class="absolute  inset-0"> <img class="h-full w-full" src="./images/gold84.png" alt=""></div>
          <div onclick=" addSubstitutes(${index})" class="absolute  inset-0 flex flex-col ">
              <div class="flex h-[50%] justify-between">
                  <div class="w-[20%]  pt-1 pl-2 md:pt-3  lg:pt-4 lg:pl-3">
                      <div class="text-[18px] md:text-[20px] font-bold">${elem.rating}</div>
                      <div class="text-[14px] md:text-[16px] font-semibold font-mono mt-[-7px]">${elem.position}</div>
                  </div>
                  <div class="w-[80%]" >
                      <img class="h-full w-full " src="${elem.photo}" alt="">
                  </div>
              </div>              
              <div class="flex flex-col items-center h-[45%]">
                  <div class="text-[10px] md:text-[12px] font-medium lg:text-[14px] w-[80%] truncate " >${elem.name}</div>
                  <div class="static-infos flex  gap-[2px] lg:gap-1">
                      <div >
                          <div class=" text-[6px] md:text-[8px] lg:text-[10px] font-normal" >PAC</div>
                          <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.pace}</div>
                      </div>
                      <div>
                          <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">SHO</div>
                          <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium" >${elem.shooting}</div>
                      </div>
                      <div>
                          <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">PAS</div>
                          <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.passing}</div>
                      </div>
                      <div>
                          <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">DRI</div>
                          <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.dribbling}</div>
                      </div>
                      <div>
                          <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">DEF</div>
                          <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.defending}</div>
                      </div>
                      <div>
                          <div class="text-[6px]  md:text-[8px] lg:text-[10px] font-normal">PHY</div>
                          <div class=" mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.physical}</div>
                      </div>
                  </div>
                  <div class="logos flex justify-center mt-[-2px] gap-1 lg:gap-[6px] items-center">
                      <div><img class="w-2 md:w-3 lg:w-5" src="${elem.flag}" alt=""></div>
                      <div><img class="w-2 md:w-3 lg:w-5" src="${elem.logo}" alt=""></div>
                  </div>
              </div>              
          </div>
      </div>`; 

      }


        //  else {
        //     suggestedPlayers.innerHTML +=`<div class="relative h-[100px] w-[90px] md:h-[140px] md:w-[110px] lg:h-[180px] lg:w-[150px]">
        //     <div class="absolute  inset-0"> <img class="h-full w-full" src="./images/gold84.png" alt=""></div>
        //     <div onclick=" addSubstitutes(${index})" class="absolute  inset-0 flex flex-col ">
        //         <div class="flex h-[50%] justify-between">
        //             <div class="w-[20%]  pt-1 pl-2 md:pt-3  lg:pt-4 lg:pl-3">
        //                 <div class="text-[18px] md:text-[20px] font-bold">${elem.rating}</div>
        //                 <div class="text-[14px] md:text-[16px] font-semibold font-mono mt-[-7px]">${elem.position}</div>
        //             </div>
        //             <div class="w-[80%]" >
        //                 <img class="h-full w-full " src="${elem.photo}" alt="">
        //             </div>
        //         </div>              
        //         <div class="flex flex-col items-center h-[45%]">
        //             <div class="text-[10px] md:text-[12px] font-medium lg:text-[14px] w-[80%] truncate " >${elem.name}</div>
        //             <div class="static-infos flex  gap-[2px] lg:gap-1">
        //                 <div >
        //                     <div class=" text-[6px] md:text-[8px] lg:text-[10px] font-normal" >PAC</div>
        //                     <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.pace}</div>
        //                 </div>
        //                 <div>
        //                     <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">SHO</div>
        //                     <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium" >${elem.shooting}</div>
        //                 </div>
        //                 <div>
        //                     <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">PAS</div>
        //                     <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.passing}</div>
        //                 </div>
        //                 <div>
        //                     <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">DRI</div>
        //                     <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.dribbling}</div>
        //                 </div>
        //                 <div>
        //                     <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">DEF</div>
        //                     <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.defending}</div>
        //                 </div>
        //                 <div>
        //                     <div class="text-[6px]  md:text-[8px] lg:text-[10px] font-normal">PHY</div>
        //                     <div class=" mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.physical}</div>
        //                 </div>
        //             </div>
        //             <div class="logos flex justify-center mt-[-2px] gap-1 lg:gap-[6px] items-center">
        //                 <div><img class="w-2 md:w-3 lg:w-5" src="${elem.flag}" alt=""></div>
        //                 <div><img class="w-2 md:w-3 lg:w-5" src="${elem.logo}" alt=""></div>
        //             </div>
        //         </div>              
        //     </div>
        // </div>`; 

        // }

     });
    
    
}

function addSubstitutes(index) {
  substitutes.push(players[index]);
  removePlayer(players , players[index] )
  displaySubstitutes(); 
  document.querySelector(".suggestion").classList.add("hidden") 
}

function removeSubstitutes(index) {
  players.push(substitutes[index]);
  removePlayer(substitutes , substitutes[index] )
  displaySubstitutes(); 
}



function displaySubstitutes() {
  const substitutesContainer = document.getElementById("substitutes");
  substitutesContainer.innerHTML=``;
  substitutes.forEach((player,index)=> {
    const playerCard = document.createElement("div");
    playerCard.className = `flex py-3  "cursor-pointer bg-zinc-50 rounded-lg shadow-md`;

console.log(playerCard)
   if(player.position !== "GK"){
    playerCard.innerHTML = `
            <img src=${player.photo} alt="" class="me-2 w-20 lg:w-32" />
            <div class="flex-grow">
              <div class="flex justify-between pe-5 flex-wrap gap-x-3 gap-y-2">
                  <h3 class="font-bold text-xl  text-neutral-700">${player.name}</h3>
                  <div class="flex gap-x-2">
                  ${player.flag ? `<img src=${player.flag} class="w-7" >` : ""}
                  ${player.logo ? `<img src=${player.logo} class="w-7" >` : ""}
                  </div>
              </div>
              <div class="flex items-center gap-x-2 mt-1">
                <span class="font-bold text-red-400">${player.position}</span>
              </div>
              <div class="text-[70%] mt-3 lg:text-[100%] flex items-start gap-x-6 flex-wrap">
                  <h4 class="font-bold">More info :</h4>
                  ${
                    player.pace
                      ? `<p class="font-bold text-blue-800">PAC : <span>${player.pace} |</span></p>`
                      : ""
                  }
                  ${
                    player.shooting
                      ? `<p class="font-bold text-blue-800">SHO : <span>${player.shooting} |</span></p>`
                      : ""
                  }
                  ${
                    player.passing
                      ? `<p class="font-bold text-blue-800">PAS : <span>${player.passing} |</span></p>`
                      : ""
                  }
                  ${
                    player.dribbling
                      ? `<p class="font-bold text-blue-800">DRB : <span>${player.dribbling} |</span></p>`
                      : ""
                  }
                  ${
                    player.defending
                      ? `<p class="font-bold text-blue-800">DEF : <span>${player.defending} |</span></p>`
                      : ""
                  }
                  ${
                    player.physical
                      ? `<p class="font-bold text-blue-800">PHY : <span>${player.physical} |</span></p>`
                      : ""
                  }
                  ${
                    player.diving
                      ? `<p class="font-bold text-blue-800">DIV : <span>${player.diving} |</span></p>`
                      : ""
                  }
                  ${
                    player.handling
                      ? `<p class="font-bold text-blue-800">HDL : <span>${player.handling} |</span></p>`
                      : ""
                  }
                  ${
                    player.kicking
                      ? `<p class="font-bold text-blue-800">KIK : <span>${player.kicking} |</span></p>`
                      : ""
                  }
                  ${
                    player.reflexes
                      ? `<p class="font-bold text-blue-800">RFL : <span>${player.reflexes} |</span></p>`
                      : ""
                  }
                  ${
                    player.speed
                      ? `<p class="font-bold text-blue-800">SPD : <span>${player.speed} |</span></p>`
                      : ""
                  }
                  ${
                    player.positioning
                      ? `<p class="font-bold text-blue-800">POS : <span>${player.positioning} |</span></p>`
                      : ""
                  }
                  <div onclick=" removeSubstitutes(${index})"><i class="fa-regular fa-square-minus"></i></div>
              </div>

            </div>
      `;

     console.log(playerCard)
console.log("playerCard")



      substitutesContainer.append(playerCard);

    }  
  }
  )
 
}



function displaySuggestions(param ,id) {
  console.log(id)
    const suggestedPlayers = document.querySelector(".suggested-players");
    suggestedPlayers.innerHTML=``;
    param.forEach((elem ,index) => {
        if (elem.position=="GK") {
            suggestedPlayers.innerHTML +=`<div  class="relative h-[100px] w-[90px] md:h-[140px] md:w-[110px] lg:h-[180px] lg:w-[150px]">
            <div class="absolute  inset-0"> <img class="h-full w-full" src="./images/gold84.png" alt=""></div>
            <div onclick="addToFormation(${index},'${id}')" class="absolute  inset-0 flex flex-col ">
                <div class="flex h-[50%] justify-between">
                    <div class="w-[20%]  pt-1 pl-2 md:pt-3  lg:pt-4 lg:pl-3">
                        <div class="text-[18px] md:text-[20px] font-bold">${elem.rating}</div>
                        <div class="text-[14px] md:text-[16px] font-semibold font-mono mt-[-7px]">${elem.position}</div>
                    </div>
                    <div class="w-[80%]" >
                        <img class="h-full w-full " src="${elem.photo}" alt="">
                    </div>
                </div>              
                <div class="flex flex-col items-center h-[45%]">
                    <div class="text-[10px] md:text-[12px] font-medium lg:text-[14px] w-[80%] truncate " >${elem.name}</div>
                    <div class="static-infos flex  gap-[2px] lg:gap-1">
                        <div >
                            <div class=" text-[6px] md:text-[8px] lg:text-[10px] font-normal" >Pos</div>
                            <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.positioning}</div>
                        </div>
                        <div>
                            <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">Div</div>
                            <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium" >${elem.diving}</div>
                        </div>
                        <div>
                            <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">Han</div>
                            <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.handling}</div>
                        </div>
                        <div>
                            <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">Kic</div>
                            <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.kicking}</div>
                        </div>
                        <div>
                            <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">Ref</div>
                            <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.reflexes}</div>
                        </div>
                        <div>
                            <div class="text-[6px]  md:text-[8px] lg:text-[10px] font-normal">Spe</div>
                            <div class=" mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.speed}</div>
                        </div>
                    </div>
                    <div class="logos flex justify-center mt-[-2px] gap-1 lg:gap-[6px] items-center">
                        <div><img class="w-2 md:w-3 lg:w-5" src="${elem.flag}" alt=""></div>
                        <div><img class="w-2 md:w-3 lg:w-5" src="${elem.logo}" alt=""></div>
                    </div>
                </div>              
            </div>
        </div>`; 
            
        } else {
            suggestedPlayers.innerHTML +=`<div onclick="addToFormation(${index},'${id}')" class="relative h-[100px] w-[90px] md:h-[140px] md:w-[110px] lg:h-[180px] lg:w-[150px]">
            <div class="absolute  inset-0"> <img class="h-full w-full" src="./images/gold84.png" alt=""></div>
            <div class="absolute  inset-0 flex flex-col ">
                <div class="flex h-[50%] justify-between">
                    <div class="w-[20%]  pt-1 pl-2 md:pt-3  lg:pt-4 lg:pl-3">
                        <div class="text-[18px] md:text-[20px] font-bold">${elem.rating}</div>
                        <div class="text-[14px] md:text-[16px] font-semibold font-mono mt-[-7px]">${elem.position}</div>
                    </div>
                    <div class="w-[80%]" >
                        <img class="h-full w-full " src="${elem.photo}" alt="">
                    </div>
                </div>              
                <div class="flex flex-col items-center h-[45%]">
                    <div class="text-[10px] md:text-[12px] font-medium lg:text-[14px] w-[80%] truncate " >${elem.name}</div>
                    <div class="static-infos flex  gap-[2px] lg:gap-1">
                        <div >
                            <div class=" text-[6px] md:text-[8px] lg:text-[10px] font-normal" >PAC</div>
                            <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.pace}</div>
                        </div>
                        <div>
                            <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">SHO</div>
                            <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium" >${elem.shooting}</div>
                        </div>
                        <div>
                            <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">PAS</div>
                            <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.passing}</div>
                        </div>
                        <div>
                            <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">DRI</div>
                            <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.dribbling}</div>
                        </div>
                        <div>
                            <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">DEF</div>
                            <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.defending}</div>
                        </div>
                        <div>
                            <div class="text-[6px]  md:text-[8px] lg:text-[10px] font-normal">PHY</div>
                            <div class=" mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.physical}</div>
                        </div>
                    </div>
                    <div class="logos flex justify-center mt-[-2px] gap-1 lg:gap-[6px] items-center">
                        <div><img class="w-2 md:w-3 lg:w-5" src="${elem.flag}" alt=""></div>
                        <div><img class="w-2 md:w-3 lg:w-5" src="${elem.logo}" alt=""></div>
                    </div>
                </div>              
            </div>
        </div>`; 

        }

     });
    
    
}

function addToFormation(index,id) {
  console.log("index  " +index)
  console.log("id "+id)
  let card = document.getElementById(id);
  console.log(suggest[index])
  // here i remove the player choosen fron the players and add it to the main players
 mainplayers.push(suggest[index]);
 removePlayer(players , suggest[index] )
 playerIndex= (mainplayers.length)-1;

  

  if (suggest[index].position=="GK") {
    card.innerHTML = `
        <div class="relative h-[90px] w-[70px] md:h-[110px] md:w-[100px] lg:h-[130px] lg:w-[100px] duration-300 hover:scale-105 overflow-hidden hover:overflow-visible">
                   <div class="absolute  inset-0"> <img class="h-full w-full" src="./images/gold84.png" alt=""></div>
                   <div class="absolute  inset-0 flex flex-col ">
                       <div class="flex h-[50%] justify-between">
                           <div class="w-[20%]  pt-1 pl-[6px]   md:pt-2 md:pl-2">
                               <div class="text-[15px] md:text-[18px] font-bold">${suggest[index].rating}</div>
                               <div class="text-[12px] md:text-[16px] font-semibold font-mono mt-[-7px]">${suggest[index].position}</div>
                           </div>
                           <div class="w-[80%]" >
                               <img class="h-full w-full " src="${suggest[index].photo}" alt="">
                           </div>
                       </div>              
                       <div class="flex flex-col items-center h-[45%]">
                           <div class="text-[9px]  md:text-[12px] font-medium md:mt-[-4px] w-[80%] truncate  " >${suggest[index].name}</div>
                           <div class="static-infos flex  gap-[1px] md:mt-[-2px] ">
                               <div >
                                   <div class=" text-[5px] md:text-[8px]  font-normal" >Pos</div>
                                   <div class="mt-[-3px] md:mt-[-2px] text-[7px] md:text-[10px]  font-medium">${suggest[index].positioning}</div>
                               </div>
                               <div>
                                   <div class="text-[5px] md:text-[8px]  font-normal">Div</div>
                                   <div class="mt-[-3px] md:mt-[-2px] text-[7px] md:text-[10px]  font-medium" >${suggest[index].diving}</div>
                               </div>
                               <div>
                                   <div class="text-[5px] md:text-[8px]  font-normal">Han</div>
                                   <div class="mt-[-3px] md:mt-[-2px] text-[7px] md:text-[10px]  font-medium">${suggest[index].handling}</div>
                               </div>
                               <div>
                                   <div class="text-[5px] md:text-[8px]  font-normal">Kic</div>
                                   <div class="mt-[-3px] md:mt-[-2px] text-[7px] md:text-[10px] font-medium">${suggest[index].kicking}</div>
                               </div>
                               <div>
                                   <div class="text-[5px] md:text-[8px]  font-normal">Ref</div>
                                   <div class="mt-[-3px] md:mt-[-2px] text-[7px] md:text-[10px]  font-medium">${suggest[index].reflexes}</div>
                               </div>
                               <div>
                                   <div class="text-[5px]  md:text-[8px]  font-normal">Spe</div>
                                   <div class=" mt-[-3px] md:mt-[-2px] text-[7px] md:text-[10px]  font-medium">${suggest[index].speed}</div>
                               </div>
                           </div>
                           <div class="logos flex justify-center mt-[-2px] gap-1 lg:gap-[6px] items-center">
                               <div><img class="w-2 md:w-3 " src="${suggest[index].flag}" alt=""></div>
                               <div><img class="w-2 md:w-3 " src="h${suggest[index].logo}" alt=""></div>
                           </div>
                       </div>              
                   </div>
                    <div class="absolute gap-2 h-fit top-0 left-[100%]   bg-neutral-700 rounded-sm flex flex-col p-1  ">
                      <div onclick="removeFromFormation(${playerIndex},'${id}')"><i class="fa-solid fa-trash-can-arrow-up text-red-500"></i></div>
                      <div onclick="suggestSubstitutes(${playerIndex},'${id}')" ><i class="fa-solid fa-right-left text-emerald-600"></i></div>    
                    </div>
               </div>`;
    
} else {
  card.innerHTML =`
 <div class="relative h-[90px] w-[70px] md:h-[110px] md:w-[100px] lg:h-[130px] lg:w-[100px] duration-300 hover:scale-105 overflow-visible">
            <div class="absolute  inset-0"> <img class="h-full w-full" src="./images/gold84.png" alt=""></div>
            <div class="absolute  inset-0 flex flex-col ">
                <div class="flex h-[50%] justify-between">
                    <div class="w-[20%]  pt-1 pl-[6px]   md:pt-2 md:pl-2">
                        <div class="text-[15px] md:text-[18px] font-bold">${suggest[index].rating}</div>
                        <div class="text-[12px] md:text-[16px] font-semibold font-mono mt-[-7px]">${suggest[index].position}</div>
                    </div>
                    <div class="w-[80%]" >
                        <img class="h-full w-full " src="${suggest[index].photo}" alt="">
                    </div>
                </div>              
                <div class="flex flex-col items-center h-[45%]">
                    <div class="text-[9px]  md:text-[12px] font-medium md:mt-[-4px] w-[80%] truncate  " >${suggest[index].name}</div>
                    <div class="static-infos flex  gap-[1px] md:mt-[-2px] ">
                        <div >
                            <div class=" text-[5px] md:text-[8px]  font-normal" >Pac</div>
                            <div class="mt-[-3px] md:mt-[-2px] text-[7px] md:text-[10px]  font-medium">${suggest[index].pace}</div>
                        </div>
                        <div>
                            <div class="text-[5px] md:text-[8px]  font-normal">Sho</div>
                            <div class="mt-[-3px] md:mt-[-2px] text-[7px] md:text-[10px]  font-medium" >${suggest[index].shooting}</div>
                        </div>
                        <div>
                            <div class="text-[5px] md:text-[8px]  font-normal">Pas</div>
                            <div class="mt-[-3px] md:mt-[-2px] text-[7px] md:text-[10px]  font-medium">${suggest[index].passing}</div>
                        </div>
                        <div>
                            <div class="text-[5px] md:text-[8px]  font-normal">Dri</div>
                            <div class="mt-[-3px] md:mt-[-2px] text-[7px] md:text-[10px] font-medium">${suggest[index].dribbling}</div>
                        </div>
                        <div>
                            <div class="text-[5px] md:text-[8px]  font-normal">Def</div>
                            <div class="mt-[-3px] md:mt-[-2px] text-[7px] md:text-[10px]  font-medium">${suggest[index].defending}</div>
                        </div>
                        <div>
                            <div class="text-[5px]  md:text-[8px]  font-normal">Phy</div>
                            <div class=" mt-[-3px] md:mt-[-2px] text-[7px] md:text-[10px]  font-medium">${suggest[index].physical}</div>
                        </div>
                    </div>
                    <div class="logos flex justify-center mt-[-2px] gap-1 lg:gap-[6px] items-center">
                        <div><img class="w-2 md:w-3 " src="${suggest[index].flag}" alt=""></div>
                        <div><img class="w-2 md:w-3 " src="${suggest[index].logo}" alt=""></div>
                    </div>
                </div>              
            </div>
            <div class="absolute gap-2 h-fit top-0 left-[100%]   bg-neutral-700 rounded-sm flex flex-col p-1  ">
              <div onclick="removeFromFormation(${playerIndex},'${id}')"><i class="fa-solid fa-trash-can-arrow-up text-red-500"></i></div>
              <div onclick="suggestSubstitutes(${playerIndex},'${id}')"><i class="fa-solid fa-right-left text-emerald-600"></i></div>    
            </div>
        </div>`;
}
document.querySelector(".suggestion").classList.add("hidden") 


}

function removeFromFormation(index,id){
  let card = document.getElementById(id);
  let position = mainplayers[index].position;

  players.push(mainplayers[index]);
  removePlayer(mainplayers , mainplayers[index] )

  card.innerHTML=`<div onclick="suggestPlayers('${position}')" class="absolute -z-10 inset-0"> <img class="h-full w-full" src="./images/gold84.png" alt=""></div>`

}

function replasePlayer(id , playerIndex , substituteIndex) {
  const card = document.getElementById(id)
  let temp = mainplayers[playerIndex];
  mainplayers[playerIndex]= substitutes[substituteIndex];
  substitutes[substituteIndex] =temp;

  if (mainplayers[playerIndex].position=="GK") {
    card.innerHTML = `
        <div class="relative h-[90px] w-[70px] md:h-[110px] md:w-[100px] lg:h-[130px] lg:w-[100px] duration-300 hover:scale-105 overflow-hidden hover:overflow-visible">
                   <div class="absolute  inset-0"> <img class="h-full w-full" src="./images/gold84.png" alt=""></div>
                   <div class="absolute  inset-0 flex flex-col ">
                       <div class="flex h-[50%] justify-between">
                           <div class="w-[20%]  pt-1 pl-[6px]   md:pt-2 md:pl-2">
                               <div class="text-[15px] md:text-[18px] font-bold">${mainplayers[playerIndex].rating}</div>
                               <div class="text-[12px] md:text-[16px] font-semibold font-mono mt-[-7px]">${mainplayers[playerIndex].position}</div>
                           </div>
                           <div class="w-[80%]" >
                               <img class="h-full w-full " src="${mainplayers[playerIndex].photo}" alt="">
                           </div>
                       </div>              
                       <div class="flex flex-col items-center h-[45%]">
                           <div class="text-[9px]  md:text-[12px] font-medium md:mt-[-4px] w-[80%] truncate  " >${mainplayers[playerIndex].name}</div>
                           <div class="static-infos flex  gap-[1px] md:mt-[-2px] ">
                               <div >
                                   <div class=" text-[5px] md:text-[8px]  font-normal" >Pos</div>
                                   <div class="mt-[-3px] md:mt-[-2px] text-[7px] md:text-[10px]  font-medium">${mainplayers[playerIndex].positioning}</div>
                               </div>
                               <div>
                                   <div class="text-[5px] md:text-[8px]  font-normal">Div</div>
                                   <div class="mt-[-3px] md:mt-[-2px] text-[7px] md:text-[10px]  font-medium" >${mainplayers[playerIndex].diving}</div>
                               </div>
                               <div>
                                   <div class="text-[5px] md:text-[8px]  font-normal">Han</div>
                                   <div class="mt-[-3px] md:mt-[-2px] text-[7px] md:text-[10px]  font-medium">${mainplayers[playerIndex].handling}</div>
                               </div>
                               <div>
                                   <div class="text-[5px] md:text-[8px]  font-normal">Kic</div>
                                   <div class="mt-[-3px] md:mt-[-2px] text-[7px] md:text-[10px] font-medium">${mainplayers[playerIndex].kicking}</div>
                               </div>
                               <div>
                                   <div class="text-[5px] md:text-[8px]  font-normal">Ref</div>
                                   <div class="mt-[-3px] md:mt-[-2px] text-[7px] md:text-[10px]  font-medium">${mainplayers[playerIndex].reflexes}</div>
                               </div>
                               <div>
                                   <div class="text-[5px]  md:text-[8px]  font-normal">Spe</div>
                                   <div class=" mt-[-3px] md:mt-[-2px] text-[7px] md:text-[10px]  font-medium">${mainplayers[playerIndex].speed}</div>
                               </div>
                           </div>
                           <div class="logos flex justify-center mt-[-2px] gap-1 lg:gap-[6px] items-center">
                               <div><img class="w-2 md:w-3 " src="${mainplayers[playerIndex].flag}" alt=""></div>
                               <div><img class="w-2 md:w-3 " src="h${mainplayers[playerIndex].logo}" alt=""></div>
                           </div>
                       </div>              
                   </div>
                    <div class="absolute gap-2 h-fit top-0 left-[100%]   bg-neutral-700 rounded-sm flex flex-col p-1  ">
                      <div onclick="removeFromFormation(${playerIndex},'${id}')"><i class="fa-solid fa-trash-can-arrow-up text-red-500"></i></div>
                      <div onclick="suggestSubstitutes(${playerIndex},'${id}')" ><i class="fa-solid fa-right-left text-emerald-600"></i></div>    
                    </div>
               </div>`;
    
} else {
  card.innerHTML =`
 <div class="relative h-[90px] w-[70px] md:h-[110px] md:w-[100px] lg:h-[130px] lg:w-[100px] duration-300 hover:scale-105 overflow-hidden hover:overflow-visible">
            <div class="absolute  inset-0"> <img class="h-full w-full" src="./images/gold84.png" alt=""></div>
            <div class="absolute  inset-0 flex flex-col ">
                <div class="flex h-[50%] justify-between">
                    <div class="w-[20%]  pt-1 pl-[6px]   md:pt-2 md:pl-2">
                        <div class="text-[15px] md:text-[18px] font-bold">${mainplayers[playerIndex].rating}</div>
                        <div class="text-[12px] md:text-[16px] font-semibold font-mono mt-[-7px]">${mainplayers[playerIndex].position}</div>
                    </div>
                    <div class="w-[80%]" >
                        <img class="h-full w-full " src="${mainplayers[playerIndex].photo}" alt="">
                    </div>
                </div>              
                <div class="flex flex-col items-center h-[45%]">
                    <div class="text-[9px]  md:text-[12px] font-medium md:mt-[-4px] w-[80%] truncate  " >${mainplayers[playerIndex].name}</div>
                    <div class="static-infos flex  gap-[1px] md:mt-[-2px] ">
                        <div >
                            <div class=" text-[5px] md:text-[8px]  font-normal" >Pac</div>
                            <div class="mt-[-3px] md:mt-[-2px] text-[7px] md:text-[10px]  font-medium">${mainplayers[playerIndex].pace}</div>
                        </div>
                        <div>
                            <div class="text-[5px] md:text-[8px]  font-normal">Sho</div>
                            <div class="mt-[-3px] md:mt-[-2px] text-[7px] md:text-[10px]  font-medium" >${mainplayers[playerIndex].shooting}</div>
                        </div>
                        <div>
                            <div class="text-[5px] md:text-[8px]  font-normal">Pas</div>
                            <div class="mt-[-3px] md:mt-[-2px] text-[7px] md:text-[10px]  font-medium">${mainplayers[playerIndex].passing}</div>
                        </div>
                        <div>
                            <div class="text-[5px] md:text-[8px]  font-normal">Dri</div>
                            <div class="mt-[-3px] md:mt-[-2px] text-[7px] md:text-[10px] font-medium">${mainplayers[playerIndex].dribbling}</div>
                        </div>
                        <div>
                            <div class="text-[5px] md:text-[8px]  font-normal">Def</div>
                            <div class="mt-[-3px] md:mt-[-2px] text-[7px] md:text-[10px]  font-medium">${mainplayers[playerIndex].defending}</div>
                        </div>
                        <div>
                            <div class="text-[5px]  md:text-[8px]  font-normal">Phy</div>
                            <div class=" mt-[-3px] md:mt-[-2px] text-[7px] md:text-[10px]  font-medium">${mainplayers[playerIndex].physical}</div>
                        </div>
                    </div>
                    <div class="logos flex justify-center mt-[-2px] gap-1 lg:gap-[6px] items-center">
                        <div><img class="w-2 md:w-3 " src="${mainplayers[playerIndex].flag}" alt=""></div>
                        <div><img class="w-2 md:w-3 " src="${mainplayers[playerIndex].logo}" alt=""></div>
                    </div>
                </div>              
            </div>
            <div class="absolute gap-2 h-fit top-0 left-[100%]   bg-neutral-700 rounded-sm flex flex-col p-1  ">
              <div onclick="removeFromFormation(${playerIndex},'${id}')"><i class="fa-solid fa-trash-can-arrow-up text-red-500"></i></div>
              <div onclick="suggestSubstitutes(${playerIndex},'${id}')" ><i class="fa-solid fa-right-left text-emerald-600"></i></div>    
            </div>
        </div>`;
}
displaySubstitutes();
document.querySelector(".suggestion").classList.add("hidden") 

  
}

function suggestSubstitutes( playerIndex ,id ) {

  if (substitutes.length == 0) {
    alert("there is No Substitutes ")
    return; 
  }

  let substituteIndex = null;
  
  let table = substitutes.filter(player => player.position.toLowerCase() === mainplayers[playerIndex].position.toLowerCase())
  // let table = substitutes.filter(mainplayers[playerIndex].position);
  console.log(table.length == 0);
  
  if (table.length == 0) {
    alert("No Substitute with position "+mainplayers[playerIndex].position)
    return; 
  }

  const suggestedPlayers = document.querySelector(".suggested-players");
  suggestedPlayers.innerHTML=``;
  console.log(table);
  console.log(substitutes);
  
  table.forEach((elem ,index) => {
  console.log(elem);

    substituteIndex = substitutes.indexOf(elem)
      if (elem.position=="GK") {
          suggestedPlayers.innerHTML +=`<div  class="relative h-[100px] w-[90px] md:h-[140px] md:w-[110px] lg:h-[180px] lg:w-[150px]">
          <div class="absolute  inset-0"> <img class="h-full w-full" src="./images/gold84.png" alt=""></div>
          <div onclick="replasePlayer('${id}',${playerIndex},${substituteIndex})" class="absolute  inset-0 flex flex-col ">
              <div class="flex h-[50%] justify-between">
                  <div class="w-[20%]  pt-1 pl-2 md:pt-3  lg:pt-4 lg:pl-3">
                      <div class="text-[18px] md:text-[20px] font-bold">${elem.rating}</div>
                      <div class="text-[14px] md:text-[16px] font-semibold font-mono mt-[-7px]">${elem.position}</div>
                  </div>
                  <div class="w-[80%]" >
                      <img class="h-full w-full " src="${elem.photo}" alt="">
                  </div>
              </div>              
              <div class="flex flex-col items-center h-[45%]">
                  <div class="text-[10px] md:text-[12px] font-medium lg:text-[14px] w-[80%] truncate " >${elem.name}</div>
                  <div class="static-infos flex  gap-[2px] lg:gap-1">
                      <div >
                          <div class=" text-[6px] md:text-[8px] lg:text-[10px] font-normal" >Pos</div>
                          <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.positioning}</div>
                      </div>
                      <div>
                          <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">Div</div>
                          <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium" >${elem.diving}</div>
                      </div>
                      <div>
                          <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">Han</div>
                          <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.handling}</div>
                      </div>
                      <div>
                          <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">Kic</div>
                          <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.kicking}</div>
                      </div>
                      <div>
                          <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">Ref</div>
                          <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.reflexes}</div>
                      </div>
                      <div>
                          <div class="text-[6px]  md:text-[8px] lg:text-[10px] font-normal">Spe</div>
                          <div class=" mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.speed}</div>
                      </div>
                  </div>
                  <div class="logos flex justify-center mt-[-2px] gap-1 lg:gap-[6px] items-center">
                      <div><img class="w-2 md:w-3 lg:w-5" src="${elem.flag}" alt=""></div>
                      <div><img class="w-2 md:w-3 lg:w-5" src="${elem.logo}" alt=""></div>
                  </div>
              </div>              
          </div>
      </div>`; 
          
      } else {
          suggestedPlayers.innerHTML +=`<div onclick="replasePlayer('${id}',${playerIndex},${substituteIndex})" class="relative h-[100px] w-[90px] md:h-[140px] md:w-[110px] lg:h-[180px] lg:w-[150px]">
          <div class="absolute  inset-0"> <img class="h-full w-full" src="./images/gold84.png" alt=""></div>
          <div class="absolute  inset-0 flex flex-col ">
              <div class="flex h-[50%] justify-between">
                  <div class="w-[20%]  pt-1 pl-2 md:pt-3  lg:pt-4 lg:pl-3">
                      <div class="text-[18px] md:text-[20px] font-bold">${elem.rating}</div>
                      <div class="text-[14px] md:text-[16px] font-semibold font-mono mt-[-7px]">${elem.position}</div>
                  </div>
                  <div class="w-[80%]" >
                      <img class="h-full w-full " src="${elem.photo}" alt="">
                  </div>
              </div>              
              <div class="flex flex-col items-center h-[45%]">
                  <div class="text-[10px] md:text-[12px] font-medium lg:text-[14px] w-[80%] truncate " >${elem.name}</div>
                  <div class="static-infos flex  gap-[2px] lg:gap-1">
                      <div >
                          <div class=" text-[6px] md:text-[8px] lg:text-[10px] font-normal" >PAC</div>
                          <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.pace}</div>
                      </div>
                      <div>
                          <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">SHO</div>
                          <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium" >${elem.shooting}</div>
                      </div>
                      <div>
                          <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">PAS</div>
                          <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.passing}</div>
                      </div>
                      <div>
                          <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">DRI</div>
                          <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.dribbling}</div>
                      </div>
                      <div>
                          <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">DEF</div>
                          <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.defending}</div>
                      </div>
                      <div>
                          <div class="text-[6px]  md:text-[8px] lg:text-[10px] font-normal">PHY</div>
                          <div class=" mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${elem.physical}</div>
                      </div>
                  </div>
                  <div class="logos flex justify-center mt-[-2px] gap-1 lg:gap-[6px] items-center">
                      <div><img class="w-2 md:w-3 lg:w-5" src="${elem.flag}" alt=""></div>
                      <div><img class="w-2 md:w-3 lg:w-5" src="${elem.logo}" alt=""></div>
                  </div>
              </div>              
          </div>
      </div>`; 

      }

   });

   document.querySelector(".suggestion").classList.remove("hidden")

  
}



function removePlayer(array , player) {
  let index = array.indexOf(player);
  if (index !== -1) {
    array.splice(index, 1);
   }
}

document.getElementById("playerForm").addEventListener('submit', (e)=>{
  e.preventDefault();
  let player = null;
   let position = playerModal.querySelector("#position").value


  if(position == "GK"){
    player = {
      name: playerModal.querySelector("#name").value,
      nationality: playerModal.querySelector("#nationality").value,
      club: playerModal.querySelector("#club").value,
      position: playerModal.querySelector("#position").value,
      photo: playerModal.querySelector("#photo").value,
      flag: playerModal.querySelector("#flag").value,
      logo: playerModal.querySelector("#logo").value,
      diving: playerModal.querySelector("#diving").value,
      handling: playerModal.querySelector("#handling").value,
      reflexes: playerModal.querySelector("#reflexes").value,
      positioning: playerModal.querySelector("#positioning").value,
      kicking: playerModal.querySelector("#kicking").value,
      speed: playerModal.querySelector("#speed").value,
      rating: playerModal.querySelector("#rating").value
    }

  } else {
    player = {
      name: playerModal.querySelector("#name").value,
      nationality: playerModal.querySelector("#nationality").value,
      club: playerModal.querySelector("#club").value,
      position: playerModal.querySelector("#position").value,
      photo: playerModal.querySelector("#photo").value,
      flag: playerModal.querySelector("#flag").value,
      logo: playerModal.querySelector("#logo").value,
      physical: playerModal.querySelector("#physical").value,
      defending: playerModal.querySelector("#defending").value,
      dribbling: playerModal.querySelector("#dribbling").value,
      passing: playerModal.querySelector("#passing").value,
      shooting: playerModal.querySelector("#shooting").value,
      pace: playerModal.querySelector("#pace").value,
      rating: playerModal.querySelector("#rating").value
    }
  }

  if (validateForm(player)) {
    let exist = players.indexOf(player)
    if (exist !== -1 ) {
      alert("The player you are trying to add already exists.");
    } else {
      players.push(player)
    }
    console.log(players[(players.length)-1])
    playerModal.classList.add('hidden')
    
  }
 
    
})

function validateForm(player) {

  console.log(player);

  
  let playerKeys = Object.keys(player)
  let staticKeys = playerKeys.filter(key => !isNaN(Number(player[key])))
  console.log(playerKeys);
  console.log(staticKeys);

  for (const key of playerKeys) {
    
    
    
    if ( player[key] === "" ) {
      alert("Please fill in all fields.");
      return false;
    }
   }

  for (const key of staticKeys) {
    console.log(player[key]);
    console.log(player[key]<= 0 ||  player[key] > 100 );
    
    
    if ( player[key]< 0 ||  player[key] > 100 ) {
      alert(`Invalid value for ${key}. It should be a number between 0 and 100.`);
      return false;
    }
   }




  let namesRegex = /^[a-zA-Z\s.'-]{2,30}$/ ;
  // let urlRegex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-]*)*$/;
  const urlRegex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-\.]*)*$/;


  if (!namesRegex.test(player.name)) {
    alert("Invalid name. please enter a valid name");
    return false;
}
if (!namesRegex.test(player.nationality)) {
    alert("Invalid nationality. please enter a valid nationality");
    return false;
}
if (!namesRegex.test(player.club)) {
    alert("Invalid club. please enter a valid club.");
    return false;
}

if ( !urlRegex.test(player.photo)) {
  console.log(!urlRegex.test(player.photo));
  
    console.log(player.photo);
    
    alert("Invalid photo URL.");
    return false;
}
if ( !urlRegex.test(player.flag)) {
    alert("Invalid flag URL.");
    return false;
}
if ( !urlRegex.test(player.logo)) {
    alert("Invalid logo URL.");
    return false;
}



 return true;

  
}



// if (suggest[index].position=="GK") {
//   card.innerHTML =`<div class="relative h-[100px] w-[90px] md:h-[140px] md:w-[110px] lg:h-[180px] lg:w-[150px]">
//   <div class="absolute  inset-0"> <img class="h-full w-full" src="./images/gold84.png" alt=""></div>
//   <div class="absolute  inset-0 flex flex-col ">
//       <div class="flex h-[50%] justify-between">
//           <div class="w-[20%]  pt-1 pl-2 md:pt-3  lg:pt-4 lg:pl-3">
//               <div class="text-[18px] md:text-[20px] font-bold">${suggest[index].rating}</div>
//               <div class="text-[14px] md:text-[16px] font-semibold font-mono mt-[-7px]">${suggest[index].position}</div>
//           </div>
//           <div class="w-[80%]" >
//               <img class="h-full w-full " src="${suggest[index].photo}" alt="">
//           </div>
//       </div>              
//       <div class="flex flex-col items-center h-[45%]">
//           <div class="text-[10px] md:text-[12px] font-medium lg:text-[14px]" >${suggest[index].name}</div>
//           <div class="static-infos flex  gap-[2px] lg:gap-1">
//               <div >
//                   <div class=" text-[6px] md:text-[8px] lg:text-[10px] font-normal" >Pos</div>
//                   <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${suggest[index].positioning}</div>
//               </div>
//               <div>
//                   <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">Div</div>
//                   <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium" >${suggest[index].diving}</div>
//               </div>
//               <div>
//                   <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">Han</div>
//                   <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${suggest[index].handling}</div>
//               </div>
//               <div>
//                   <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">Kic</div>
//                   <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${suggest[index].kicking}</div>
//               </div>
//               <div>
//                   <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">Ref</div>
//                   <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${suggest[index].reflexes}</div>
//               </div>
//               <div>
//                   <div class="text-[6px]  md:text-[8px] lg:text-[10px] font-normal">Spe</div>
//                   <div class=" mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${suggest[index].speed}</div>
//               </div>
//           </div>
//           <div class="logos flex justify-center mt-[-2px] gap-1 lg:gap-[6px] items-center">
//               <div><img class="w-2 md:w-3 lg:w-5" src="${suggest[index].flag}" alt=""></div>
//               <div><img class="w-2 md:w-3 lg:w-5" src="${suggest[index].logo}" alt=""></div>
//           </div>
//       </div>              
//   </div>
// </div>`; 
  
// } else {
// card.innerHTML =`<div class="relative h-[100px] w-[90px] md:h-[140px] md:w-[110px] lg:h-[180px] lg:w-[150px]">
//   <div class="absolute  inset-0"> <img class="h-full w-full" src="./images/gold84.png" alt=""></div>
//   <div class="absolute  inset-0 flex flex-col ">
//       <div class="flex h-[50%] justify-between">
//           <div class="w-[20%]  pt-1 pl-2 md:pt-3  lg:pt-4 lg:pl-3">
//               <div class="text-[18px] md:text-[20px] font-bold">${suggest[index].rating}</div>
//               <div class="text-[14px] md:text-[16px] font-semibold font-mono mt-[-7px]">${suggest[index].position}</div>
//           </div>
//           <div class="w-[80%]" >
//               <img class="h-full w-full " src="${suggest[index].photo}" alt="">
//           </div>
//       </div>              
//       <div class="flex flex-col items-center h-[45%]">
//           <div class="text-[10px] md:text-[12px] font-medium lg:text-[14px]" >${suggest[index].name}</div>
//           <div class="static-infos flex  gap-[2px] lg:gap-1">
//               <div >
//                   <div class=" text-[6px] md:text-[8px] lg:text-[10px] font-normal" >PAC</div>
//                   <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${suggest[index].pace}</div>
//               </div>
//               <div>
//                   <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">SHO</div>
//                   <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium" >${suggest[index].shooting}</div>
//               </div>
//               <div>
//                   <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">PAS</div>
//                   <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${suggest[index].passing}</div>
//               </div>
//               <div>
//                   <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">DRI</div>
//                   <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${suggest[index].dribbling}</div>
//               </div>
//               <div>
//                   <div class="text-[6px] md:text-[8px] lg:text-[10px] font-normal">DEF</div>
//                   <div class="mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${suggest[index].defending}</div>
//               </div>
//               <div>
//                   <div class="text-[6px]  md:text-[8px] lg:text-[10px] font-normal">PHY</div>
//                   <div class=" mt-[-3px] md:mt-0 text-[10px] md:text-[12px] lg:text-[14px] font-medium">${suggest[index].physical}</div>
//               </div>
//           </div>
//           <div class="logos flex justify-center mt-[-2px] gap-1 lg:gap-[6px] items-center">
//               <div><img class="w-2 md:w-3 lg:w-5" src="${suggest[index].flag}" alt=""></div>
//               <div><img class="w-2 md:w-3 lg:w-5" src="${suggest[index].logo}" alt=""></div>
//           </div>
//       </div>              
//   </div>
// </div>`; 

// }

// console.log(addToFormation(1,'lb'));

