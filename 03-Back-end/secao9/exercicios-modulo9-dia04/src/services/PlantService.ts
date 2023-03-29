// import { INewPlant } from '../../interfaces';
// import { BadRequestException } from '../../exceptions';

// export default class PlantValidate {
//   private static validateBreed(breed: string): void {
//     if (typeof breed !== 'string') {
//       throw new BadRequestException('Attribute "breed" must be string.');
//     }
//   }

//   private static validateNeedsSun(needsSun: boolean): void {
//     if (typeof needsSun !== 'boolean') {
//       throw new BadRequestException('Attribute "needsSun" must be boolean.');
//     }
//   }

//   private static validateOrigin(origin: string): void {
//     if (typeof origin !== 'string') {
//       throw new BadRequestException('Attribute "origin" must be string.');
//     }
//   }

//   private static validateSize(size: number): void {
//     if (typeof size !== 'number') {
//       throw new BadRequestException('Attribute "size" must be number.');
//     }
//   }

//   public static validateAttributes(plant: INewPlant): void {
//     PlantValidate.validateBreed(plant.breed);
//     PlantValidate.validateNeedsSun(plant.needsSun);
//     PlantValidate.validateOrigin(plant.origin);
//     PlantValidate.validateSize(plant.size);
//   }
// }

import { INewPlant, IPlant } from '../interfaces/IPlant';
import { IService } from './interfaces';
import { IModel } from '../models/interfaces';
import { NotFoundException } from '../exceptions';
import PlantValidate from './validations/PlantValidate';

class PlantService implements IService<IPlant, INewPlant> {
  private readonly model: IModel<IPlant>;

  constructor(model: IModel<IPlant>) {
    this.model = model;
  }

  public async getAll(): Promise<IPlant[]> {
    const plants = await this.model.getAll();
    return plants;
  }

  public async create(plant: INewPlant): Promise<IPlant> {
    PlantValidate.validateAttributes(plant);

    const { needsSun, size, origin } = plant;
    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);

    const newPlant = await this.model.create({ ...plant, waterFrequency });
    return newPlant;
  }

  public async getById(id: string): Promise<IPlant> {
    const plant = await this.model.getById(id);
    if (!plant) throw new NotFoundException('Plant not Found!');
    return plant;
  }

  public async update(id: string, plant: Omit<IPlant, 'id'>): Promise<IPlant> {
    const plantExists = await this.model.getById(id);
    if (!plantExists) throw new NotFoundException('Plant not Found!');

    PlantValidate.validateAttributes(plant);

    const editedPlant = await this.model.update({ id: parseInt(id, 10), ...plant });
    return editedPlant;
  }

  public async removeById(id: string): Promise<void> {
    const isPlantRemoved = await this.model.removeById(id);
    if (!isPlantRemoved) throw new NotFoundException('Plant not Found!');
  }
}

export default PlantService;
