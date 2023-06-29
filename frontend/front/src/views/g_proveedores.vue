<template>
  <div>
    <h6>proveedores</h6>

    <!-- Nav tabs -->
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#home"
          type="button"
          role="tab"
          aria-controls="home"
          aria-selected="true"
        >
          Listado
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
        >
          Proveedor
        </button>
      </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
      <div
        class="tab-pane active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
        tabindex="0"
      >
        <br />
        <h6 class="display-6">Listado de proveedores del sistema</h6>
        <div class="table-responsive">
          <table class="table table-sm">
            <thead class="table-dark">
              <tr>
                <th>Nit</th>
                <th>Nombre</th>
                <th>Telefono</th>
                <th>Ciudad</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <div class="dropdown">
                    <button
                      class="btn btn-success btn-sm dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <v-icon name="fa-cog" scale="0.8" />
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#"
                          ><v-icon
                            name="io-archive-sharp"
                            scale="0.8"
                          />Archivar</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          ><v-icon
                            name="io-information-circle-sharp"
                            scale="0.8"
                          />Detalles</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          ><v-icon
                            name="fa-regular-edit"
                            scale="0.8"
                          />Editar</a
                        >
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <div class="dropdown">
                    <button
                      class="btn btn-success btn-sm dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <v-icon name="fa-cog" scale="0.8" />
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#"
                          ><v-icon
                            name="io-archive-sharp"
                            scale="0.8"
                          />Archivar</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          ><v-icon
                            name="io-information-circle-sharp"
                            scale="0.8"
                          />Detalles</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          ><v-icon
                            name="fa-regular-edit"
                            scale="0.8"
                          />Editar</a
                        >
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <div class="dropdown">
                    <button
                      class="btn btn-success btn-sm dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <v-icon name="fa-cog" scale="0.8" />
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#"
                          ><v-icon
                            name="io-archive-sharp"
                            scale="0.8"
                          />Archivar</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          ><v-icon
                            name="io-information-circle-sharp"
                            scale="0.8"
                          />Detalles</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          ><v-icon
                            name="fa-regular-edit"
                            scale="0.8"
                          />Editar</a
                        >
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <div class="dropdown">
                    <button
                      class="btn btn-success btn-sm dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <v-icon name="fa-cog" scale="0.8" />
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#"
                          ><v-icon
                            name="io-archive-sharp"
                            scale="0.8"
                          />Archivar</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          ><v-icon
                            name="io-information-circle-sharp"
                            scale="0.8"
                          />Detalles</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          ><v-icon
                            name="fa-regular-edit"
                            scale="0.8"
                          />Editar</a
                        >
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <div class="dropdown">
                    <button
                      class="btn btn-success btn-sm dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <v-icon name="fa-cog" scale="0.8" />
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#"
                          ><v-icon
                            name="io-archive-sharp"
                            scale="0.8"
                          />Archivar</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          ><v-icon
                            name="io-information-circle-sharp"
                            scale="0.8"
                          />Detalles</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          ><v-icon
                            name="fa-regular-edit"
                            scale="0.8"
                          />Editar</a
                        >
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <div class="dropdown">
                    <button
                      class="btn btn-success btn-sm dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <v-icon name="fa-cog" scale="0.8" />
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#"
                          ><v-icon
                            name="io-archive-sharp"
                            scale="0.8"
                          />Archivar</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          ><v-icon
                            name="io-information-circle-sharp"
                            scale="0.8"
                          />Detalles</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          ><v-icon
                            name="fa-regular-edit"
                            scale="0.8"
                          />Editar</a
                        >
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div
        class="tab-pane"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
        tabindex="0"
      >
        <br />
        <div class="container">
          <h6 class="display-6">Datos del proveedor</h6>
          <div class="row">
            <div class="col-6 col-md-4">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Nombre o razon social "
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="col-6 col-md-4">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Nit"
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="col-6 col-md-4">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Direccion"
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="col-6 col-md-4">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Telefono"
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="col-6 col-md-4">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Email"
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="col-6 col-md-4">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Pagina web"
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="col-6 col-md-4">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Rep Legal"
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="col-6 col-md-4">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Doc Rep Legal"
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="col-6 col-md-4">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Banco de cuenta"
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="col-6 col-md-4">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Tipo de cuenta"
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="col-6 col-md-4">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Numero cuenta"
                aria-label=".form-control-sm example"
              />
            </div>
            <div class="col-6 col-md-4">
              <button class="btn btn-success btn-sm">Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.minimal {
  font-size: 0.6rem !important;
  padding: 5px !important;
}
li {
  font-size: 0.6rem !important;
}
</style>
