const lista1 =  [
    1,
    2,
    3,
    5,
    10,
    20,
    30,
    1,
    2,
    1,
    30
];

const lista1Count = {

};

lista1.map(
    function(i) {
        if(lista1Count[i]) {
            lista1Count[i] += 1;   
        }else{
            lista1Count[i] = 1;
        }
    }
);