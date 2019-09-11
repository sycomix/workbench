import Vue from "vue";
import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";
import VuexORMAxios from "@vuex-orm/plugin-axios";

/** ORM */
import Model from "./entities/model.entity";
import Notebook from "./entities/notebook.entity";
import Pipeline from "./entities/pipeline.entity";
import Project from "./entities/project.entity";

/** Modules */
import AppModule from "./modules/app";
import ProjectModule from "./modules/project";

const database = new VuexORM.Database();

database.register(Model);
database.register(Notebook);
database.register(Pipeline);
database.register(Project);

Vue.use(Vuex);
VuexORM.use(VuexORMAxios, { database });

export default new Vuex.Store({
  modules: {
    app: AppModule,
    project: ProjectModule
  },
  plugins: [VuexORM.install(database)]
});