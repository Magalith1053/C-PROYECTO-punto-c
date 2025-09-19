export class ClientesController {
    private clientes: any[] = []; // Simulación de base de datos en memoria

    public crearCliente(cliente: any) {
        this.clientes.push(cliente);
        return cliente;
    }

    public obtenerClientes() {
        return this.clientes;
    }

    public actualizarCliente(id: number, clienteActualizado: any) {
        const index = this.clientes.findIndex(cliente => cliente.id === id);
        if (index !== -1) {
            this.clientes[index] = { ...this.clientes[index], ...clienteActualizado };
            return this.clientes[index];
        }
        throw new Error('Cliente no encontrado');
    }

    public eliminarCliente(id: number) {
        const index = this.clientes.findIndex(cliente => cliente.id === id);
        if (index !== -1) {
            const clienteEliminado = this.clientes.splice(index, 1);
            return clienteEliminado;
        }
        throw new Error('Cliente no encontrado');
    }
}