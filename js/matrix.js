function Matrix(v0, v1, v2, v3) {
  return v0 && v1 && v2 && v3
    ? [v0, v1, v2, v3]
    : [
      Vector(1,0,0,0),
      Vector(0,1,0,0),
      Vector(0,0,1,0),
      Vector(0,0,0,1),
    ]
}

function matrixMultiplyVector(matrix, vector) {
  return Vector(
    matrix[0][0] * vector[0] + matrix[1][0] * vector[1] + matrix[2][0] * vector[2] + matrix[3][0] * vector[3],
    matrix[0][1] * vector[0] + matrix[1][1] * vector[1] + matrix[2][1] * vector[2] + matrix[3][1] * vector[3],
    matrix[0][2] * vector[0] + matrix[1][2] * vector[1] + matrix[2][2] * vector[2] + matrix[3][2] * vector[3],
    matrix[0][3] * vector[0] + matrix[1][3] * vector[1] + matrix[2][3] * vector[2] + matrix[3][3] * vector[3]
  )
}

function matrixMultiplyMatrix(matrix1, matrix2) {
  return [
    [
      matrix1[0][0] * matrix2[0][0] + matrix1[1][0] * matrix2[0][1] + matrix1[2][0] * matrix2[0][2] + matrix1[3][0] * matrix2[0][3],
      matrix1[0][1] * matrix2[0][0] + matrix1[1][1] * matrix2[0][1] + matrix1[2][1] * matrix2[0][2] + matrix1[3][1] * matrix2[0][3],
      matrix1[0][2] * matrix2[0][0] + matrix1[1][2] * matrix2[0][1] + matrix1[2][2] * matrix2[0][2] + matrix1[3][2] * matrix2[0][3],
      matrix1[0][3] * matrix2[0][0] + matrix1[1][3] * matrix2[0][1] + matrix1[2][3] * matrix2[0][2] + matrix1[3][3] * matrix2[0][3]
    ],
    [
      matrix1[0][0] * matrix2[1][0] + matrix1[1][0] * matrix2[1][1] + matrix1[2][0] * matrix2[1][2] + matrix1[3][0] * matrix2[1][3],
      matrix1[0][1] * matrix2[1][0] + matrix1[1][1] * matrix2[1][1] + matrix1[2][1] * matrix2[1][2] + matrix1[3][1] * matrix2[1][3],
      matrix1[0][2] * matrix2[1][0] + matrix1[1][2] * matrix2[1][1] + matrix1[2][2] * matrix2[1][2] + matrix1[3][2] * matrix2[1][3],
      matrix1[0][3] * matrix2[1][0] + matrix1[1][3] * matrix2[1][1] + matrix1[2][3] * matrix2[1][2] + matrix1[3][3] * matrix2[1][3]
    ],
    [
      matrix1[0][0] * matrix2[2][0] + matrix1[1][0] * matrix2[2][1] + matrix1[2][0] * matrix2[2][2] + matrix1[3][0] * matrix2[2][3],
      matrix1[0][1] * matrix2[2][0] + matrix1[1][1] * matrix2[2][1] + matrix1[2][1] * matrix2[2][2] + matrix1[3][1] * matrix2[2][3],
      matrix1[0][2] * matrix2[2][0] + matrix1[1][2] * matrix2[2][1] + matrix1[2][2] * matrix2[2][2] + matrix1[3][2] * matrix2[2][3],
      matrix1[0][3] * matrix2[2][0] + matrix1[1][3] * matrix2[2][1] + matrix1[2][3] * matrix2[2][2] + matrix1[3][3] * matrix2[2][3]
    ],
    [
      matrix1[0][0] * matrix2[3][0] + matrix1[1][0] * matrix2[3][1] + matrix1[2][0] * matrix2[3][2] + matrix1[3][0] * matrix2[3][3],
      matrix1[0][1] * matrix2[3][0] + matrix1[1][1] * matrix2[3][1] + matrix1[2][1] * matrix2[3][2] + matrix1[3][1] * matrix2[3][3],
      matrix1[0][2] * matrix2[3][0] + matrix1[1][2] * matrix2[3][1] + matrix1[2][2] * matrix2[3][2] + matrix1[3][2] * matrix2[3][3],
      matrix1[0][3] * matrix2[3][0] + matrix1[1][3] * matrix2[3][1] + matrix1[2][3] * matrix2[3][2] + matrix1[3][3] * matrix2[3][3]
    ]
  ]
}

function matrixRotateY(angle) {
  return Matrix(
      Vector(Math.cos(angle),0, Math.sin(angle), 0),
      Vector(0,1,0,0),
      Vector(-Math.sin(angle),0, Math.cos(angle), 0),
      Vector(0,0,0,1)
  );
}
