json.extract! @party, :name, :location

json.array! @party.guests do |guest| 
    json.extract! guest, :name, :age, :favorite_color 
end