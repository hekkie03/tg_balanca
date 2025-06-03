import RfidRepository from './RfidRepository.js';
import PesagemRepository from '../pesagem/PesagemRepository.js';
import VeiculoRepository from '../veiculo/VeiculoRepository.js';
import CargaRepository from '../carga/CargaRepository.js';
import MotoristaRepository from '../motorista/MotoristaRepository.js';
import { RfidModel } from './RfidModel.js';

class RfidController {
  async create(req, res) {
    try {
      // Create data object
      const rfidModel = new RfidModel(req.body);
      
      // Repository handles validation and DB insert
      const result = await RfidRepository.create(rfidModel);
      
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ 
        error: error.message,
        details: error.errors 
      });
    }
  }

  async poggers(req, res) {
    try {
      /* {
        "uid":  "1371B62C",
        "nome":  "Camiao01",
        "placa":  "ABC1D34",
        "cultura":  "Mandioca",
        "peso_bruto":  0,
        "peso_tara":  0,
        "peso_liquido":  0
      } */
      const { uid } = req.body;
      const [{ idrfid , idveiculo, idmotorista, idcarga }] = await RfidRepository.selectByRfid(uid)
      console.log(idveiculo, idmotorista, idcarga)
      const [veiculo] = await VeiculoRepository.selectById(idveiculo);
      const [motorista] = await MotoristaRepository.selectById(idmotorista);
      const [carga] = await CargaRepository.selectById(idcarga);

      const criarPesagem = {
        pesdatapesagem: new Date(),
        peskg: req.body.peso_liquido,
        pesidveiculo: idveiculo,
        pesidmotorista: idmotorista,
        pesidcarga: idcarga,
        pesidrfid: idrfid
      }

      await PesagemRepository.create(criarPesagem);
      
      const retorno = {
        nomemotorista: motorista.motnome,
        placacaminhão: veiculo.veiplaca,
        tipocarga: carga.cartipocarga,
        origem: carga.carorigem,
        destino: carga.cardestino,
        peso: req.body.peso_liquido,
        rfid: uid,
      }
      
      res.status(201).json(retorno);
    } catch (error) {
      res.status(400).json({ 
        error: error.message,
        details: error 
      });
    }
  }
  
  async getAll(req, res) {
    try {
      // Get All
      const result = await RfidController.getAll();
      
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ 
        error: error.message,
        details: error.errors 
      });
    }
  }
}

export default new RfidController();