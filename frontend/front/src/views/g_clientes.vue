<template>
  <div>
    <h6>Clientes</h6>

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
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#archivo"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
        >
          Archivo
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
        <h6 class="display-6">Listado de clientes del sistema</h6>
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
              <tr v-for="provee,index in proveedores" :key="index">
                <th>{{provee.nombre}}</th>
                <td>{{provee.nit}}</td>
                <td>{{provee.direccion}}</td>
                <td>{{provee.telefono}}</td>
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
                        <a
                          class="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          ><v-icon
                            name="io-information-circle-sharp"
                            scale="0.8"
                          />Detalles
                        </a>
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
          <h6 class="display-6">Datos del cliente</h6>
          <div class="row">
            <div class="col-6 col-md-4">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Nombre o razon social "
                aria-label=".form-control-sm example"
                v-model="proveedor.nombre"
              />
            </div>
            <div class="col-6 col-md-4">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Nit"
                aria-label=".form-control-sm example"
                v-model="proveedor.nit"
              />
            </div>
            <div class="col-6 col-md-4">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Direccion"
                aria-label=".form-control-sm example"
                v-model="proveedor.direccion"
              />
            </div>
            <div class="col-6 col-md-4">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Telefono"
                aria-label=".form-control-sm example"
                v-model="proveedor.telefono"
              />
            </div>
            <div class="col-6 col-md-4">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Email"
                aria-label=".form-control-sm example"
                v-model="proveedor.email"
              />
            </div>
            <div class="col-6 col-md-4">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Pagina web"
                aria-label=".form-control-sm example"
                v-model="proveedor.pagweb"
              />
            </div>
            <div class="col-6 col-md-4">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Rep Legal"
                aria-label=".form-control-sm example"
                v-model="proveedor.replegal"
              />
            </div>
            <div class="col-6 col-md-4">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Doc Rep Legal"
                aria-label=".form-control-sm example"
                v-model="proveedor.docreplegal"
              />
            </div>
            <div class="col-6 col-md-4">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Banco de cuenta"
                aria-label=".form-control-sm example"
                v-model="proveedor.banco"
              />
            </div>
            <div class="col-6 col-md-4">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Tipo de cuenta"
                aria-label=".form-control-sm example"
                v-model="proveedor.tipocuenta"
              />
            </div>
            <div class="col-6 col-md-4">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Numero cuenta"
                aria-label=".form-control-sm example"
                v-model="proveedor.numcuenta"
              />
            </div>
            <div class="col-6 col-md-4">
          
              <button class="btn btn-success btn-sm" @click="guardaproveedor()" v-if="proveedor.nombre && proveedor.nit" enabled >
                Guardar >>
              </button>
            </div>
            <h6>vector</h6>
            {{ proveedor }}
            <!--  -->

            <ul>
          
              <h6>tabla</h6>
              <li v-for="prov,index in proveedores" :key="index">
                {{ prov.nombre }} {{ prov.nit }}
              
              </li>

 
            </ul>
          </div>
        </div>
      </div>
      <!--  -->
      <div
        class="tab-pane"
        id="archivo"
        role="tabpanel"
        aria-labelledby="profile-tab"
        tabindex="0"
      >
        <br />
        <div class="container">
          <h6 class="display-6">archivo</h6>

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
                        class="btn btn-warning btn-sm dropdown-toggle"
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
                            />Activar</a
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
      </div>
    </div>
  </div>

  <!-- Button trigger modal -->

  <!-- Modal detalles-->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Detalles</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let proveedor = ref({
  nombre: "",
  nit: "",
  direccion: "",
  telefono: "",
});


let proveedores = ref([]);


/* funciones */

const guardaproveedor = () => {

  proveedores.value.push({
    nombre: proveedor.value.nombre,
    nit: proveedor.value.nit,
    direccion: proveedor.value.direccion,
    telefono: proveedor.value.telefono,
  });
  /* vaciamos campos */

  proveedor.value.nombre = "";
  proveedor.value.nit = "";
  proveedor.value.direccion = "";
  proveedor.value.telefono = "";
};
</script>

<style></style>


<!-- 

          CLIENTES
          nombres
          apellidos
          tipo documento( nit -cc)
          numerodoc
          telefono
          direccion
          dpto 
          ciudad
          email
 -->