<template>
  <div>
    <v-toolbar  color="primary" dark>
      <v-toolbar-title>Nilai dan Kehadiran Siswa</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-icon>info</v-icon> 
      <v-btn flat to="/">New</v-btn>
      <span>Kelas : </span>
    
      <v-flex xs2>
        <v-combobox
          v-model="select"
          :items="items"
          chips
        >
          <template slot="selection" slot-scope="data">
            <v-chip
              :selected="data.selected"
              :disabled="data.disabled"
              :key="JSON.stringify(data.item)"
              class="v-chip--select-multi "
              @input="data.parent.selectItem(data.item)"
            >
              {{ data.item }}
            </v-chip>
          </template>
        </v-combobox>
      </v-flex>
      <span>Bulan : </span>
      <v-flex xs2>
        <v-combobox
          v-model="selectbulan"
          :items="bulan"
          chips
        >
          <template slot="selection" slot-scope="data">
            <v-chip
              :selected="data.selected"
              :disabled="data.disabled"
              :key="JSON.stringify(data.item)"
              class="v-chip--select-multi "
              @input="data.parent.selectItem(data.item)"
            >
              <v-avatar class="accent white--text">
                {{ data.item.slice(0, 1).toUpperCase() }}
              </v-avatar>
              {{ data.item }}
            </v-chip>
          </template>
        </v-combobox>
      </v-flex>

      <v-spacer></v-spacer>

      <!-- EDIT DIALOG : 
            A dialog contains two slots, one for its activator and one for its content (default)
      -->
      <v-dialog v-model="dialog" max-width="500px">
        <v-btn slot="activator" color="secondary" dark class="mb-2">Tambah Baru</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap just>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.name" label="Nama"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.nilaimid" label="Nilai Mid"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.nilaisemester" label="Nilai Semester"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.hadir" label="Hadir"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.alpa" label="Alpa"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>

    <v-data-table
      :headers="headers"
      :items="listsiswa"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-center">{{ props.item.nilaimid }}</td>
        <td class="text-xs-center">{{ props.item.nilaisemester }}</td>
      
        <td class="text-xs-center">{{ props.item.hadir }}</td>
        <td class="text-xs-center">{{ props.item.alpa }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
        
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  export default {
    data: () => ({
      select: 'Kelas 1A',
      items: [
        'Kelas 1A',
        'Kelas 2A',
        'Kelas 3A',
        'Pramuka'
      ],
      selectbulan: 'Jan 2018',
      bulan: [
        'Jan 2018',
        'Feb 2018',
        'Mar 2018',
        'Apr 2018'
      ],
      dialog: false,
      headers: [
        {
          text: 'Nama',
          align: 'left',
          sortable: true,
          value: 'name'
        },
        { text: 'Nilai Mid', value: 'nilaimid', align: 'center' },
        { text: 'Nilai Semester', value: 'nilaisemester', align: 'center' },
        { text: 'Hadir', value: 'hadir', align: 'center' },
        { text: 'Alpa', value: 'alpa', align: 'center' },
        { text: 'Actions', value: 'name', sortable: false, align: 'center' }
      ],
      listsiswa: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        nilaimid: 0,
        nilaisemester: 0,
        hadir: 0,
        alpa: 0
      },
      defaultItem: {
        name: '',
        nilaimid: 0,
        nilaisemester: 0,
        hadir: 0,
        alpa: 0
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Tambah Siswa Baru' : 'Edit Data Siswa'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.listsiswa = [
          {
            name: 'Karyn Ruby',
            nilaimid: 80,
            nilaisemester: 90,
            hadir: 22,
            alpa: 0
          },
          {
            name: 'Ken Julio',
            nilaimid: 75,
            nilaisemester: 95,
            hadir: 20,
            alpa: 2
          },
          {
            name: 'Jordan Ray',
            nilaimid: 89,
            nilaisemester: 100,
            hadir: 23,
            alpa: 0
          }
        ]
      },

      editItem (item) {
        this.editedIndex = this.listsiswa.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.listsiswa.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.listsiswa.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.listsiswa[this.editedIndex], this.editedItem)
        } else {
          this.listsiswa.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>

<style scoped>
  .toolbarlabel {
    text-justify: center;
  }
</style>