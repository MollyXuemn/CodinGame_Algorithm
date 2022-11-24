// Conditions

while (true) {
    const enemy1 = readline(); // name of enemy 1
    const dist1 = parseInt(readline()); // distance to enemy 1
    const enemy2 = readline(); // name of enemy 2
    const dist2 = parseInt(readline()); // distance to enemy 2

    // You have to output a correct ship name to shoot ("Buzz", enemy1, enemy2, ...)

    if (dist1 < dist2) {
        console.log(enemy1);
    } else {
        console.log(enemy2);
    }

}
