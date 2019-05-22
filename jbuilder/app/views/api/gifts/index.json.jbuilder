json.array! @gifts do |gift| 
    json.extract! gift, :title, :description, :guest_id
end