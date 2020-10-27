import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Race} from '../../model/race.model';
import {Subscription} from 'rxjs';
import {RacesService} from '../../services/races.service';
import {Class} from '../../model/class.model';
import {ClassesService} from '../../services/classes.service';
import {CharacterClass} from '../../model/character-class.model';
import {Skill} from '../../model/skill.model';
import {SkillsService} from '../../services/skills.service';
import {Talent} from '../../model/talent.model';
import {TalentsService} from '../../services/talents.service';
import {CharacterTalent} from '../../model/character-talent.model';
import {Spell} from '../../model/spell.model';
import {CharacterSpell} from '../../model/character-spell.model';
import {SpellsService} from '../../services/spells.service';
import {Item} from '../../model/item.model';
import {CharacterItem} from '../../model/character-item.model';
import {ItemsService} from '../../services/items.service';
import {Weapon} from '../../model/weapon.model';
import {CharacterWeapon} from '../../model/character-weapon.model';
import {Armor} from '../../model/armor.model';
import {CharacterArmor} from '../../model/character-armor.model';
import {WeaponsService} from '../../services/weapons.service';
import {ArmorsService} from '../../services/armors.service';
import {CharacterSkill} from '../../model/character-skill.model';
import {CharactersService} from '../../services/characters.service';
import {Character} from '../../model/character.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss']
})
export class NewCharacterComponent implements OnInit, OnDestroy {

  newCharacterForm: FormGroup;
  alignments = [['Loyal Bon', 'lb'],
      ['Neutre Bon', 'nb'],
      ['Chaotic Bon', 'cb'],
      ['Loyal Neutre', 'ln'],
      ['Neutre', 'n'],
      ['Chaotic Neutre', 'cn'],
      ['Loyal Mauvais', 'lm'],
      ['Neutre Mauvais', 'nm'],
      ['Chaotic Mauvais', 'cm']];
  genders = ['Homme', 'Femme'];
  years = Array.from(Array(251 - 16).keys(), (v, k) => k + 16);
  cms = Array.from(Array(221 - 90).keys(), (v, k) => k + 90);
  kgs = Array.from(Array(151 - 30).keys(), (v, k) => k + 30);
  scores = Array.from(Array(21 - 8).keys(), (v, k) => k + 8);
  hp = Array.from(Array(21).keys());

  races: Race[];
  racesSubscription: Subscription;

  classes: Class[];
  classesSubscription: Subscription;
  formClasses: CharacterClass[] = [];
  errorClasses = '';

  skills: Skill[];
  skillsSubscription: Subscription;
  formSkills: CharacterSkill[] = [];

  talents: Talent[];
  talentsSubscription: Subscription;
  formTalents: CharacterTalent[] = [];
  errorTalents = '';

  spells: Spell[];
  spellsSubscription: Subscription;
  formSpells: CharacterSpell[] = [];
  errorSpells = '';

  items: Item[];
  itemsSubscription: Subscription;
  formItems: CharacterItem[] = [];

  weapons: Weapon[];
  weaponsSubscription: Subscription;
  formWeapons: CharacterWeapon[] = [];

  armors: Armor[];
  armorsSubscription: Subscription;
  formArmors: CharacterArmor[] = [];

  errorInventory = '';
  errorForm = '';

  characters: Character[] = [];
  charactersSubscription: Subscription;

  constructor(private formBuilder: FormBuilder,
              private racesService: RacesService,
              private classesService: ClassesService,
              private skillsService: SkillsService,
              private talentsService: TalentsService,
              private spellsService: SpellsService,
              private itemsService: ItemsService,
              private weaponsService: WeaponsService,
              private armorsService: ArmorsService,
              private charactersService: CharactersService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();

    this.racesSubscription = this.racesService.racesSubject.subscribe(
      (data) => {
        this.races = data;
      }
    );
    this.racesService.getRaces();
    this.racesService.emitRaces();

    this.classesSubscription = this.classesService.classesSubject.subscribe(
      (data) => {
        this.classes = data;
      }
    );
    this.classesService.getClasses();
    this.classesService.emitClasses();

    this.skillsSubscription = this.skillsService.skillsSubject.subscribe(
      (data) => {
        this.skills = data;
      }
    );
    this.skillsService.getSkills();
    this.skillsService.emitSkills();

    this.talentsSubscription = this.talentsService.talentsSubject.subscribe(
      (data) => {
        this.talents = data;
      }
    );
    this.talentsService.getTalents();
    this.talentsService.emitTalents();

    this.spellsSubscription = this.spellsService.spellsSubject.subscribe(
      (data) => {
        this.spells = data;
      }
    );
    this.spellsService.getSpells();
    this.spellsService.emitSpells();

    this.itemsSubscription = this.itemsService.itemsSubject.subscribe(
      (data) => {
        this.items = data;
      }
    );
    this.itemsService.getItems();
    this.itemsService.emitItems();

    this.weaponsSubscription = this.weaponsService.weaponsSubject.subscribe(
      (data) => {
        this.weapons = data;
      }
    );
    this.weaponsService.getWeapons();
    this.weaponsService.emitWeapons();

    this.armorsSubscription = this.armorsService.armorsSubject.subscribe(
      (data) => {
        this.armors = data;
      }
    );
    this.armorsService.getArmors();
    this.armorsService.emitArmors();

    this.charactersSubscription = this.charactersService.charactersSubject.subscribe(
      (data) => {
        this.characters = data;
      }
    );
    this.charactersService.getCharacters();
    this.charactersService.emitCharacters();
  }

  initForm(): void {
    this.newCharacterForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        alignment: ['', Validators.required],
        race: [Race, Validators.required],
        gender: ['', Validators.required],
        age: [0, Validators.required],
        height: [0, Validators.required],
        weight: [0, Validators.required],
        strength: [0, Validators.required],
        dexterity: [0, Validators.required],
        constitution: [0, Validators.required],
        intelligence: [0, Validators.required],
        wisdom: [0, Validators.required],
        charisma: [0, Validators.required],
        hp: [0, Validators.required],
        pc: [0, Validators.required],
        pa: [0, Validators.required],
        po: [0, Validators.required],
        pp: [0, Validators.required],
        exp: [0, Validators.required],
        formClassId: 0,
        formClassLvl: 0,
        skill1: 0,
        classSkill1: false,
        skill2: 0,
        classSkill2: false,
        skill3: 0,
        classSkill3: false,
        skill4: 0,
        classSkill4: false,
        skill5: 0,
        classSkill5: false,
        skill6: 0,
        classSkill6: false,
        skill7: 0,
        classSkill7: false,
        skill8: 0,
        classSkill8: false,
        skill9: 0,
        classSkill9: false,
        skill10: 0,
        classSkill10: false,
        skill11: 0,
        classSkill11: false,
        formTalentId: 0,
        formSpellId: 0,
        formItemId: 0,
        formItemQuantity: 0,
        formItemEquipped: false,
        formWeaponId: 0,
        formWeaponQuantity: 0,
        formWeaponEquipped: false,
        formArmorId: 0,
        formArmorQuantity: 0,
        formArmorEquipped: false
      }
    );
  }

  onAddClass(): void {
    const formClassId = this.newCharacterForm.value.formClassId;
    const lvl = this.newCharacterForm.value.formClassLvl;
    let lock = false;

    if (formClassId === 0) {
      lock = true;
      this.errorClasses = 'Veuillez choisir une classe';
    }
    if (!lock && (lvl < 1 || lvl > 20)) {
      lock = true;
      this.errorClasses = 'Le niveau doit être compris entre 1 et 20 (inclus)';
    }
    if (!lock) {
      let sumLvl = lvl;
      this.formClasses.forEach(
        value => {
          sumLvl += value.lvl;
          if (value.class_.id.toString() === formClassId) {
            this.errorClasses = 'Vous ne pouvez pas ajouter 2 fois la même classe';
            lock = true;
          }
        }
      );
      if (sumLvl > 20) {
        lock = true;
        this.errorClasses = 'Un personnage ne peut pas cumuler plus de 20 niveaux pour ses classes';
      }
    }
    if (!lock) {
      this.errorClasses = '';
      this.classesService.getClassById(formClassId).then(
        value => {
          this.formClasses.push(new CharacterClass(value, lvl));
        }
      );
    }
  }

  onDeleteClass(index: number): void {
    this.formClasses.splice(index, 1);
  }

  onAddTalent(): void {
    const formTalentId = this.newCharacterForm.value.formTalentId;
    let lock = false;

    if (formTalentId === 0) {
      lock = true;
      this.errorTalents = 'Veuillez choisir un don';
    }
    if (!lock) {
      this.formTalents.forEach(
        value => {
          if (value.talent.id.toString() === formTalentId) {
            this.errorTalents = 'Vous ne pouvez pas ajouter 2 fois le même don';
            lock = true;
          }
        }
      );
    }
    if (!lock) {
      this.errorTalents = '';
      this.talentsService.getTalentById(formTalentId).then(
        value => {
          this.formTalents.push(new CharacterTalent(value));
        }
      );
    }
  }

  onDeleteTalent(index: number): void {
    this.formTalents.splice(index, 1);
  }

  onAddSpell(): void {
    const formSpellId = this.newCharacterForm.value.formSpellId;
    let lock = false;

    if (formSpellId === 0) {
      lock = true;
      this.errorSpells = 'Veuillez choisir un sort';
    }
    if (!lock) {
      this.formSpells.forEach(
        value => {
          if (value.spell.id.toString() === formSpellId) {
            this.errorSpells = 'Vous ne pouvez pas ajouter 2 fois le même sort';
            lock = true;
          }
        }
      );
    }
    if (!lock) {
      this.errorSpells = '';
      this.spellsService.getSpellById(formSpellId).then(
        value => {
          this.formSpells.push(new CharacterSpell(value));
        }
      );
    }
  }

  onDeleteSpell(index: number): void {
    this.formSpells.splice(index, 1);
  }

  onAddItem(): void {
    const formItemId = this.newCharacterForm.value.formItemId;
    const formItemQuantity = this.newCharacterForm.value.formItemQuantity;
    const formItemEquipped = this.newCharacterForm.value.formItemEquipped;
    let lock = false;

    if (formItemId === 0) {
      lock = true;
      this.errorInventory = 'Veuillez choisir un item';
    }
    if (!lock && (formItemQuantity < 1 || formItemQuantity > 100)) {
      lock = true;
      this.errorInventory = 'La quantité d\'item doit être comprise entre 1 et 100';
    }
    if (!lock) {
      this.formItems.forEach(
        value => {
          if (value.item.id.toString() === formItemId) {
            lock = true;
            this.errorInventory = 'Vous ne pouvez pas ajouter 2 fois le même item';
          }
        }
      );
    }
    if (!lock) {
      this.errorInventory = '';
      this.itemsService.getItemById(formItemId).then(
        value => {
          this.formItems.push(new CharacterItem(value, formItemQuantity, formItemEquipped));
        }
      );
    }
  }

  onDeleteItem(index: number): void {
    this.formItems.splice(index, 1);
  }

  onAddWeapon(): void {
    const formWeaponId = this.newCharacterForm.value.formWeaponId;
    const formWeaponQuantity = this.newCharacterForm.value.formWeaponQuantity;
    const formWeaponEquipped = this.newCharacterForm.value.formWeaponEquipped;
    let lock = false;

    if (formWeaponId === 0) {
      lock = true;
      this.errorInventory = 'Veuillez choisir une arme';
    }
    if (!lock && (formWeaponQuantity < 1 || formWeaponQuantity > 100)) {
      lock = true;
      this.errorInventory = 'La quantité d\'arme doit être comprise entre 1 et 100';
    }
    if (!lock) {
      this.formWeapons.forEach(
        value => {
          if (value.weapon.id.toString() === formWeaponId) {
            lock = true;
            this.errorInventory = 'Vous ne pouvez pas ajouter 2 fois la même arme';
          }
        }
      );
    }
    if (!lock) {
      this.errorInventory = '';
      this.weaponsService.getWeaponById(formWeaponId).then(
        value => {
          this.formWeapons.push(new CharacterWeapon(value, formWeaponQuantity, formWeaponEquipped));
        }
      );
    }
  }

  onDeleteWeapon(index: number): void {
    this.formWeapons.splice(index, 1);
  }

  onAddArmor(): void {
    const formArmorId = this.newCharacterForm.value.formArmorId;
    const formArmorQuantity = this.newCharacterForm.value.formArmorQuantity;
    const formArmorEquipped = this.newCharacterForm.value.formArmorEquipped;
    let lock = false;

    if (formArmorId === 0) {
      lock = true;
      this.errorInventory = 'Veuillez choisir une armure';
    }
    if (!lock && (formArmorQuantity < 1 || formArmorQuantity > 100)) {
      lock = true;
      this.errorInventory = 'La quantité d\'armure doit être comprise entre 1 et 100';
    }
    if (!lock) {
      this.formArmors.forEach(
        value => {
          if (value.armor.id.toString() === formArmorId) {
            lock = true;
            this.errorInventory = 'Vous ne pouvez pas ajouter 2 fois la même armure';
          }
        }
      );
    }
    if (!lock) {
      this.errorInventory = '';
      this.armorsService.getArmorById(formArmorId).then(
        value => {
          this.formArmors.push(new CharacterArmor(value, formArmorQuantity, formArmorEquipped, 1));
        }
      );
    }
  }

  onDeleteArmor(index: number): void {
    this.formArmors.splice(index, 1);
  }

  onSubmit(): void {
    let lock = false;

    if (this.formClasses.length === 0) {
      lock = true;
      this.errorForm = 'Vous devez avoir au moins une classe';
    }
    if (!lock) {
      const name = this.newCharacterForm.value.name;
      const gender = this.newCharacterForm.value.gender;
      const race = this.races.find(
        value => {
          if (value.name === this.newCharacterForm.value.race) {
            return true;
          }
        }
      );
      const alignment = this.newCharacterForm.value.alignment;
      const age = this.newCharacterForm.value.age;
      const height = this.newCharacterForm.value.height;
      const weight = this.newCharacterForm.value.weight;
      const strength = this.newCharacterForm.value.strength;
      const dexterity = this.newCharacterForm.value.dexterity;
      const constitution = this.newCharacterForm.value.constitution;
      const intelligence = this.newCharacterForm.value.intelligence;
      const wisdom = this.newCharacterForm.value.wisdom;
      const charisma = this.newCharacterForm.value.charisma;
      const hp = this.newCharacterForm.value.hp;
      const pc = this.newCharacterForm.value.pc;
      const pa = this.newCharacterForm.value.pa;
      const po = this.newCharacterForm.value.po;
      const pp = this.newCharacterForm.value.pp;
      const exp = this.newCharacterForm.value.exp;
      const skill1 = this.newCharacterForm.value.skill1;
      const classSkill1 = this.newCharacterForm.value.classSkill1;
      const skill2 = this.newCharacterForm.value.skill2;
      const classSkill2 = this.newCharacterForm.value.classSkill2;
      const skill3 = this.newCharacterForm.value.skill3;
      const classSkill3 = this.newCharacterForm.value.classSkill3;
      const skill4 = this.newCharacterForm.value.skill4;
      const classSkill4 = this.newCharacterForm.value.classSkill4;
      const skill5 = this.newCharacterForm.value.skill5;
      const classSkill5 = this.newCharacterForm.value.classSkill5;
      const skill6 = this.newCharacterForm.value.skill6;
      const classSkill6 = this.newCharacterForm.value.classSkill6;
      const skill7 = this.newCharacterForm.value.skill7;
      const classSkill7 = this.newCharacterForm.value.classSkill7;
      const skill8 = this.newCharacterForm.value.skill8;
      const classSkill8 = this.newCharacterForm.value.classSkill8;
      const skill9 = this.newCharacterForm.value.skill9;
      const classSkill9 = this.newCharacterForm.value.classSkill9;
      const skill10 = this.newCharacterForm.value.skill10;
      const classSkill10 = this.newCharacterForm.value.classSkill10;
      const skill11 = this.newCharacterForm.value.skill11;
      const classSkill11 = this.newCharacterForm.value.classSkill11;

      this.formSkills.push(new CharacterSkill(this.skills[0], classSkill1, skill1));
      this.formSkills.push(new CharacterSkill(this.skills[1], classSkill2, skill2));
      this.formSkills.push(new CharacterSkill(this.skills[2], classSkill3, skill3));
      this.formSkills.push(new CharacterSkill(this.skills[3], classSkill4, skill4));
      this.formSkills.push(new CharacterSkill(this.skills[4], classSkill5, skill5));
      this.formSkills.push(new CharacterSkill(this.skills[5], classSkill6, skill6));
      this.formSkills.push(new CharacterSkill(this.skills[6], classSkill7, skill7));
      this.formSkills.push(new CharacterSkill(this.skills[7], classSkill8, skill8));
      this.formSkills.push(new CharacterSkill(this.skills[8], classSkill9, skill9));
      this.formSkills.push(new CharacterSkill(this.skills[9], classSkill10, skill10));
      this.formSkills.push(new CharacterSkill(this.skills[10], classSkill11, skill11));

      this.charactersService.postNewCharacter(
        new Character(
          name, alignment, race, gender, age, height, weight * 1000,
          strength, dexterity, constitution, intelligence, wisdom, charisma,
          hp, pc, pa, po, pp, exp,
          this.formClasses,
          this.formSkills,
          this.formTalents,
          this.formSpells,
          this.formWeapons,
          this.formArmors,
          this.formItems
        )
      ).catch(
        reason => {
          this.errorForm = 'Une erreur est survenue !';
        }
      );
      this.charactersService.emitCharacters();
      this.router.navigate(['/characters']);
    }
  }

  ngOnDestroy(): void {
    this.racesSubscription.unsubscribe();
    this.classesSubscription.unsubscribe();
    this.skillsSubscription.unsubscribe();
    this.talentsSubscription.unsubscribe();
    this.spellsSubscription.unsubscribe();
    this.itemsSubscription.unsubscribe();
    this.weaponsSubscription.unsubscribe();
    this.armorsSubscription.unsubscribe();
  }
}
