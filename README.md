
<h1>Prueba_tecnica</h1>
    <h2>Rutas usuarios</h2>
    <h3>1.Ruta '/'</h3>
    <p>
      <strong>-GET:</strong>Devuelve usuarios y arrays a partir del suministro
      de token de usuario
    </p>
    <p><strong>-POST:</strong>Registro de usuarios</p>
    <h3>2.Ruta '/signup'</h3>
    <p><strong>-POST:</strong>Se registra un usuario</p>
    <p><strong>Siguiendo la estructura:</strong></p>
    <code>{ username: str, email: str, password: str}</code>
    <h3>3.Ruta '/login'</h3>
    <p>
      <strong>-POST:</strong>Verifica si existe email de usuario y compara
      password
    </p>
    <hr />
    <h2>Rutas arrays</h2>
    <h3>1.Ruta '/asc'</h3>
    <p>
      <strong>-GET:</strong>Se obtiene un array organizado de forma ascendente
    </p>
    <h3>2.Ruta '/des'</h3>
    <p>
      <strong>-GET:</strong>Se obtiene un array organizado de forma descendente
    </p>
    <h3>3.Ruta '/mix'</h3>
    <p>
      <strong>-GET:</strong>Se obtiene un array organizado de forma aleatoria
    </p>
    <h3>4.Ruta '/assets.sorted.txt'</h3>
    <p>
      <strong>-GET:</strong>Se obtiene el registro de los arrays organizados
    </p>
