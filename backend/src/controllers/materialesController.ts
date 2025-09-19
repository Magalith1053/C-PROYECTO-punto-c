export class MaterialesController {
    private materiales: any[] = [];

    public crearMaterial(material: any) {
        this.materiales.push(material);
        return material;
    }

    public obtenerMateriales() {
        return this.materiales;
    }

    public actualizarMaterial(id: number, materialActualizado: any) {
        const index = this.materiales.findIndex(m => m.id === id);
        if (index !== -1) {
            this.materiales[index] = { ...this.materiales[index], ...materialActualizado };
            return this.materiales[index];
        }
        return null;
    }

    public eliminarMaterial(id: number) {
        const index = this.materiales.findIndex(m => m.id === id);
        if (index !== -1) {
            return this.materiales.splice(index, 1);
        }
        return null;
    }
}