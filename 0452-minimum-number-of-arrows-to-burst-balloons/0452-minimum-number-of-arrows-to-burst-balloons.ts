function findMinArrowShots(points: number[][]): number {
    points.sort((a, b) => a[0] - b[0]);
    let darts = 1;
    let curOverlapRight = points[0][1];
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > curOverlapRight) {
            darts++;
            curOverlapRight = points[i][1];
            continue;
        }
        if (points[i][1] <= curOverlapRight) {
            curOverlapRight = Math.min(curOverlapRight, points[i][1]);
        }
    }
    return darts;
};