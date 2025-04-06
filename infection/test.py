import torch
import torch.nn as nn
import torchvision.transforms as transforms
import torchvision.models as models
from PIL import Image

# Load Model
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

num_classes = 3  # Ensure this matches train.py output
model = models.resnet18()
num_ftrs = model.fc.in_features
model.fc = nn.Linear(num_ftrs, num_classes)  # Match trained model
model.load_state_dict(torch.load("skin_infection_model.pth", map_location=device))
model = model.to(device)
model.eval()

# Define Transform (Must match training preprocessing)
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.5, 0.5, 0.5], std=[0.5, 0.5, 0.5])
])

# Class Labels (Ensure they match training)
class_labels = ["rashes", "rings", "scabies"]  # Only 3 classes

def predict_image(image_path):
    """Predict the class of a given image."""
    image = Image.open(image_path).convert("RGB")
    image = transform(image).unsqueeze(0).to(device)
    
    with torch.no_grad():
        outputs = model(image)
        _, predicted = torch.max(outputs, 1)
    
    return class_labels[predicted.item()]

# Example Usage
image_path = "testing_image/testing_image.png"  # Update with your image path
prediction = predict_image(image_path)
print(f"Predicted Infection: {prediction}")
