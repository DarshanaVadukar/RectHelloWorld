class DataModel {
  private data: Record<string, any> = {};

  setData(newData: Record<string, any>): void {
    this.data = {...this.data, ...newData};
  }

  getData(): Record<string, any> {
    return this.data;
  }
}

export default new DataModel();
