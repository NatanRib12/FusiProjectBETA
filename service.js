function validateWorkout(validateWorkoutsData){
    if( validateWorkoutsData.distance > 0 
        && Number.isFinite(validateWorkoutsData.distance)
        && validateWorkoutsData.bpm > 0 && validateWorkoutsData.bpm <= 200 
        && Number.isFinite(validateWorkoutsData.bpm)
        && validateWorkoutsData.charge > 0 && validateWorkoutsData.charge <= 10 
        && Number.isFinite(validateWorkoutsData.charge)){

        // Processa dados recebidos do objeto finalData de app.js
        let traningLoad = (validateWorkoutsData.distance * validateWorkoutsData.bpm * validateWorkoutsData.charge) / 100;
        let recovery = 100 - traningLoad;
        let recommendation = "";

        traningLoad = Math.floor(traningLoad);
        recovery = Math.floor(recovery)

        // Após calcular recovery, processa nível de recomendação
        if (recovery > 70 && recovery <= 100) {
            recommendation = "Baixo nível de estresse. Recomenda-se aumentar a intensidade."
        } 
        else if (recovery > 40 && recovery <= 70) {
            recommendation = "Níveis de estresse moderados. Recomenda-se realizar treino leve a moderado"
        } 
        else if (recovery > 0 && recovery <= 40) {
            recommendation = "Altos níveis de estresse. Recomenda-se descansar por 1 ou 2 dias."
        } 
        else if (recovery <= 0) {
            recommendation = "Altos níveis de estresse. Recomenda-se descansar por 1 ou 2 dias."
            recovery = 0
        }

        return {
            traningLoad: traningLoad,
            recovery: recovery,
            recommendation: recommendation
        };

    } 
    else {
           return false;
    }
}

module.exports = validateWorkout;
