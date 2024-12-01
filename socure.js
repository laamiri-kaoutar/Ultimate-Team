<div id="playerModal" class="fixed inset-0 bg-zinc-700 bg-opacity-75 flex items-center justify-center hidden  ">
<div class="bg-zinc-900 text-white p-6 rounded-lg  w-[500px]">
  <!-- <h2 class="text-xl font-semibold mb-4">Create Player</h2> -->
  <form id="playerForm"  >
    <div class="grid grid-cols-4 gap-4 ">
        
     <div>
        <label for="name" class="block mb-2">Name</label>
        <input type="text" id="name" name="name" class="w-full p-2 mb-4 bg-zinc-700 text-white rounded" placeholder="Player Name" />    
     </div>
            
     <div>
        <label for="nationality" class="block mb-2">Nationality</label>
        <input type="text" id="nationality" name="nationality" class="w-full p-2 mb-4 bg-zinc-700 text-white rounded" placeholder="Nationality" />    
    </div>

     <div>
        <label for="club" class="block mb-2">Club</label>
        <input type="text" id="club" name="club" class="w-full p-2 mb-4 bg-zinc-700 text-white rounded" placeholder="Club" />    
     </div>

    <div>
        <label for="position" class="block mb-2">Position</label>
        <select id="position" name="position" class="w-full p-2 mb-4 bg-zinc-700 text-white rounded">
            <option value="CM">CM</option>
            <option value="GK">GK</option>
            <option value="LW">LW</option>
            <option value="CF">CF</option>
            <option value="RW">RW</option>
            <option value="LB">LB</option>
            <option value="CB">CB</option>
            <option value="RB">RB</option>
        </select>
    </div>

    </div>

    <div class="grid grid-cols-4 gap-4">
     <div>
        <label for="photo" class="block mb-2">Photo</label>
        <input type="text" id="photo" name="photo" class="w-full p-2 mb-4 bg-zinc-700 text-white rounded" placeholder="Photo URL" />    
     </div>

     <div>
        <label for="flag" class="block mb-2">Flag</label>
        <input type="text" id="flag" name="flag" class="w-full p-2 mb-4 bg-zinc-700 text-white rounded" placeholder="Flag URL" />    
     </div>

     <div>
        <label for="logo" class="block mb-2">Logo</label>
        <input type="text" id="logo" name="logo" class="w-full p-2 mb-4 bg-zinc-700 text-white rounded" placeholder="Logo URL" />    
     </div>
    </div>
    <div id="playerStats" class="grid grid-cols-3 gap-4">
      <div>
        <label for="rating" class="block text-sm mb-1">Rat</label>
        <input type="number" id="rating" name="rating" class="w-full p-2 bg-zinc-700 text-white rounded" placeholder="Rating" />
      </div>
      <div>
        <label for="pace" class="block text-sm mb-1">Pac</label>
        <input type="number" id="pace" name="pace" class="w-full p-2 bg-zinc-700 text-white rounded" placeholder="Pace" />
      </div>
      <div>
        <label for="shooting" class="block text-sm mb-1">Sho</label>
        <input type="number" id="shooting" name="shooting" class="w-full p-2 bg-zinc-700 text-white rounded" placeholder="Shooting" />
      </div>
      <div>
        <label for="passing" class="block text-sm mb-1">Pas</label>
        <input type="number" id="passing" name="passing" class="w-full p-2 bg-zinc-700 text-white rounded" placeholder="Passing" />
      </div>
      <div>
        <label for="dribbling" class="block text-sm mb-1">Dri</label>
        <input type="number" id="dribbling" name="dribbling" class="w-full p-2 bg-zinc-700 text-white rounded" placeholder="Dribbling" />
      </div>
      <div>
        <label for="defending" class="block text-sm mb-1">Def</label>
        <input type="number" id="defending" name="defending" class="w-full p-2 bg-zinc-700 text-white rounded" placeholder="Defending" />
      </div>
      <div>
        <label for="physical" class="block text-sm mb-1">Phy</label>
        <input type="number" id="physical" name="physical" class="w-full p-2 bg-zinc-700 text-white rounded" placeholder="Physical" />
      </div>
    </div>

    <div id="GKStats" class="grid grid-cols-3 gap-4 hidden">
        <div>
            <label for="diving" class="block text-sm mb-1">Div</label>
            <input type="number" id="diving" name="diving" class="w-full p-2 bg-zinc-700 text-white rounded" placeholder="Diving" />
        </div>
        <div>
            <label for="handling" class="block text-sm mb-1">Hand</label>
            <input type="number" id="handling" name="handling" class="w-full p-2 bg-zinc-700 text-white rounded" placeholder="Handling" />
        </div>
        <div>
            <label for="reflexes" class="block text-sm mb-1">Ref</label>
            <input type="number" id="reflexes" name="reflexes" class="w-full p-2 bg-zinc-700 text-white rounded" placeholder="Reflexes" />
        </div>
        <div>
            <label for="positioning" class="block text-sm mb-1">Pos</label>
            <input type="number" id="positioning" name="positioning" class="w-full p-2 bg-zinc-700 text-white rounded" placeholder="Positioning" />
        </div>
        <div>
            <label for="kicking" class="block text-sm mb-1">Kick</label>
            <input type="number" id="kicking" name="kicking" class="w-full p-2 bg-zinc-700 text-white rounded" placeholder="Kicking" />
        </div>
        <div>
            <label for="speed" class="block text-sm mb-1">Speed</label>
            <input type="number" id="speed" name="speed" class="w-full p-2 bg-zinc-700 text-white rounded" placeholder="Speed" />
        </div>
        <div>
            <label for="rating" class="block text-sm mb-1">Rating</label>
            <input type="number" id="rating" name="rating" class="w-full p-2 bg-zinc-700 text-white rounded" placeholder="Overall Rating" />
        </div>
    </div>
    

    <button  type="submit" class="mt-4  bg-white hover:bg-black hover:text-white hover:border-2  hover:border-white text-black px-2 py-1 rounded ">
      Save Player
    </button> 
    <button id="cancel" type="button" class="mt-4 bg-red-600 hover:bg-white  text-white hover:text-black px-2 py-1 rounded ">
       cancel
    </button>
  </form>
</div>
</div>


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
  
    players.push(player)
    console.log(players[(players.length)-1])
    playerModal.classList.add('hidden')
      
  })