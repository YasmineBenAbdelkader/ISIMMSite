async function submitForm() {
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const cin = document.getElementById('cin').value;
    const num_inscri = document.getElementById('num_inscri').value;
    const groupe = document.getElementById('levelSelector').value;
    const cin_2 = document.getElementById('cin_2').value;

    try {
      const response = await fetch('/mutationCPI', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nom,
          prenom,
          cin,
          num_insc: num_inscri,
          groupe,
          cin2: cin_2
        })
      });

      const data = await response.json();
      console.log(data);
      // Traitez la réponse du back-end ici
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
    }
  }