// "1d6c95446cab947224286b7bec4382d898c664c7a3cafb16d3d110a3044cf4dc"

function searchCompetitions() {
    // Obtener la fecha ingresada por el usuario
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
  
    // Construir la URL de la solicitud GET
    const baseUrl = `https://www.worldcubeassociation.org/api/v0/competitions?start=${startDate}&end=${endDate}`;
  
    // Token de acceso a la API de la WCA (reemplaza "TU_API_KEY" con tu propia clave)
    const token = "1d6c95446cab947224286b7bec4382d898c664c7a3cafb16d3d110a3044cf4dc";
  
    // Realizar la solicitud GET a la API de la WCA para obtener las competiciones
    fetch(baseUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        // Obtener una referencia al elemento <tbody> en el HTML
        const competitionsList = document.getElementById("competitions-list");
        competitionsList.innerHTML = ""; // Limpiar la lista antes de agregar las nuevas competiciones
  
        // Si no se encontraron competiciones, mostrar el mensaje "No hay competiciones"
        if (data.length === 0) {
          const noCompetitionsRow = document.createElement("tr");
          const noCompetitionsCell = document.createElement("td");
          noCompetitionsCell.setAttribute("colspan", "4");
          noCompetitionsCell.textContent = "No hay competiciones";
          noCompetitionsRow.appendChild(noCompetitionsCell);
          competitionsList.appendChild(noCompetitionsRow);
        }
  
        // Construir una lista HTML de las competiciones encontradas
        data.forEach(competition => {
          const row = document.createElement("tr");
  
          const nameCell = document.createElement("td");
          nameCell.textContent = competition.name;
          row.appendChild(nameCell);
  
          const cityCell = document.createElement("td");
          cityCell.textContent = competition.city;
          row.appendChild(cityCell);
  
          const countryCell = document.createElement("td");
          countryCell.textContent = competition.country_iso2;
          row.appendChild(countryCell);
  
          // Realizar una solicitud GET a la API de la WCA para obtener los ganadores de la competición
          const winnersUrl = `https://www.worldcubeassociation.org/api/v0/competitions/${competition.id}/results`;
          fetch(winnersUrl, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
            .then(response => response.json())
            .then(winnersData => {
              if (winnersData.length > 0) {
                const winner = winnersData[0]; // Obtener el primer ganador
                const winnerCell = document.createElement("td");
                winnerCell.textContent = winner.name;
                row.appendChild(winnerCell);
              } else {
                const noWinnerCell = document.createElement("td");
                noWinnerCell.textContent = "No se encontraron ganadores";
                row.appendChild(noWinnerCell);
              }
            })
            .catch(error => console.error(error));
  
          competitionsList.appendChild(row);
        });
      })
      .catch(error => console.error(error));
  }
  
  
  